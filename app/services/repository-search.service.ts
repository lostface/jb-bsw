import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as R from 'ramda';
import { Repository } from '../app.types';

// TODO extract to constants
const URL_SEARCH_REPOSITORIES = 'https://api.github.com/search/repositories';

interface ResponseBody {
  items: RawRepository[];
}

interface RawRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  open_issues_count: number;
}

@Injectable()
export default class RepositorySearchService {
  constructor(private http: Http) {}

  search(query: string): Observable<Repository[]> {
    const { http } = this;
    return http.get(URL_SEARCH_REPOSITORIES, { search: `q=${query}`})
      .debounceTime(300)
      .map((response: Response) => response.json() as ResponseBody)
      .pluck('items')
      .map(R.map(toRepository));
  }
}

function toRepository(rawRepository: RawRepository): Repository {
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
