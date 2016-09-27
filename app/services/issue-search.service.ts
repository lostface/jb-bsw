import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import * as R from 'ramda';

// TODO extract to constants
const URL_SEARCH_ISSUES = 'https://api.github.com/search/issues';

@Injectable()
export default class IssueSearchService {
  constructor(private http: Http) {}

  search(query: string): Observable<any[]> {
    const { http } = this;
    return http.get(URL_SEARCH_ISSUES, { search: `q=${query}`})
      .debounceTime(300)
      .map(response => response.json())
      .pluck('items')
      .map(R.map(toIssue));
  }

  searchByRepoFullName(repoFullName: string): Observable<any[]> {
    return this.search(`repo:${repoFullName}`);
  }
}

function toIssue(rawIssue: any): any {
  return {
    id: rawIssue.id,
    number: rawIssue.number,
    title: rawIssue.title,
    htmlUrl: rawIssue.html_url,
    userLogin: rawIssue.user.login,
    labels: R.pluck('name', rawIssue.labels),
    state: rawIssue.state,
    comments: rawIssue.comments,
    createdAt: rawIssue.created_at,
  };
}
