import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import * as R from 'ramda';

// TODO extract to constants
const URL_SEARCH_REPOSITORIES = 'https://api.github.com/search/repositories';

@Injectable()
export default class RepositorySearchService {
  constructor(private http: Http) {}

  search(query: string): Observable<any[]> {
    const { http } = this;
    return http.get(URL_SEARCH_REPOSITORIES, { search: `q=${query}`})
      .debounceTime(300)
      .map(response => response.json())
      .pluck('items')
      .map(R.map(toRepository));
  }
}

function toRepository(rawRepository: any): any {
  return {
    id: rawRepository.id,
    name: rawRepository.name,
    fullName: rawRepository.full_name,
    htmlUrl: rawRepository.html_url,
    description: rawRepository.description,
    stargazersCount: rawRepository.stargazers_count,
    watchersCount: rawRepository.watchers_count,
    language: rawRepository.language,
    forksCount: rawRepository.forks_count,
    openIssuesCount: rawRepository.open_issues_count,
  };
}
