import { Component, OnInit } from '@angular/core';
import RepositorySearchService from '../../services/repository-search.service';
import IssueSearchService from '../../services/issue-search.service';
import * as R from 'ramda';
import { Repository } from '../../app.types';

@Component({
  selector: 'app',
  template: `
    <div id="app-container">
      <p>App</p>

      <search-panel
        (searchTrigger)="searchRepositories($event)"
        (clearButtonClick)="searchRepositories('')"
      ></search-panel>

      <content
        [repositories]="repositories"
        [selectedRepo]="selectedRepo"
        [selectedRepoIssues]="selectedRepoIssues"
        (repositoryClick)="handleRepositoryClick($event)"
      ></content>
    </div>
  `,
})

export default class AppComponent implements OnInit {
  public repositories: Repository[];
  public selectedRepo?: Repository;
  public selectedRepoIssues?: any[];

  constructor(
    private issueSearchService: IssueSearchService,
    private repositorySearchService: RepositorySearchService
  ) {}

  ngOnInit(): void {
    this.repositories = [];
    this.resetSelectedProps();

    // initiate an "empty" search
    this.searchRepositories('');
  }

  resetSelectedProps(): void {
    this.selectedRepo = undefined;
    this.selectedRepoIssues = [];
  }

  searchRepositories(query: string): void {
    // small hack to allow "empty" search
    query = query ? query : 'size:>=0';

    const setRepositores = (repositories: Repository[]) => {
      this.repositories = repositories;
    };

    const handleError = (err: {}) => {
      // TODO proper error handling
      console.error(err);
      setRepositores([]);
    };

    const resetSelectedProps = () => this.resetSelectedProps();

    this.repositorySearchService.search(query)
      .subscribe(
        setRepositores,
        handleError,
        resetSelectedProps,
      );
  }

  searchIssuesByRepoFullName(repoFullName: string): void {
    const setSelectedRepoIssues = issues => {
      this.selectedRepoIssues = issues;
    };

    const handleError = (err: {}) => {
      // TODO proper error handling
      console.error(err);
      setSelectedRepoIssues([]);
    };

    this.issueSearchService.searchByRepoFullName(repoFullName)
      .subscribe(
        setSelectedRepoIssues,
        handleError,
      );
  }

  handleRepositoryClick(repositoryId: number): void {
    // TODO more FP-ish
    const findRepoByRepositoryId = R.find(
      (repository: Repository) => repository.id === repositoryId
    );
    const repo = findRepoByRepositoryId(this.repositories);

    this.selectedRepo = repo;
    this.searchIssuesByRepoFullName(this.selectedRepo.fullName);
  }
}
