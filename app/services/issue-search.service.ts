import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import * as R from 'ramda';
import { Issue } from '../app.types';

// TODO extract to constants
const URL_SEARCH_ISSUES = 'https://api.github.com/search/issues';

interface ResponseBody {
  items: RawIssue[];
}

interface RawUser {
  login: string;
}

interface RawLabel {
  name: string;
}

interface RawIssue {
  id: number;
  number: number;
  title: string;
  html_url: string;
  user: RawUser;
  labels: RawLabel[];
  state: string;
  comments: number;
  created_at: string;
}

@Injectable()
export default class IssueSearchService {
  constructor(private http: Http) {}

  search(query: string): Observable<Issue[]> {
    const { http } = this;
    return http.get(URL_SEARCH_ISSUES, { search: `q=${query}`})
      .debounceTime(300)
      .map(response => response.json())
      .pluck('items')
      .map(R.map(toIssue));
  }

  searchByRepoFullName(repoFullName: string): Observable<Issue[]> {
    return this.search(`repo:${repoFullName}`);
  }
}

function toIssue(rawIssue: RawIssue): Issue {
  const labels = R.pluck('name', rawIssue.labels) as string[];

  return {
    id: rawIssue.id,
    number: rawIssue.number,
    title: rawIssue.title,
    htmlUrl: rawIssue.html_url,
    userLogin: rawIssue.user.login,
    labels,
    state: rawIssue.state,
    comments: rawIssue.comments,
    createdAt: rawIssue.created_at,
  };
}
