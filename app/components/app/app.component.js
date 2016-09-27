import R from 'ramda';
import template from './app.component.html';

class AppController {
  constructor(repositorySearchService, issueSearchService) {
    'ngInject';
    this.repositorySearchService = repositorySearchService;
    this.issueSearchService = issueSearchService;
  }

  $onInit() {
    this.repositories = [];
    this.resetSelectedProps();

    // initiate an "empty" search
    this.searchRepositories('');
  }

  resetSelectedProps() {
    this.selectedRepo = null;
    this.selectedRepoIssues = [];
  }

  searchRepositories(query) {
    // small hack to allow "empty" search
    query = query ? query : 'size:>=0';

    this.repositorySearchService.search(query)
      .then(repositories => {
        this.repositories = repositories;
      })
      .catch(err => {
        // TODO proper error handling
        console.error(err);
        this.repositories = [];
      })
      .finally(() => this.resetSelectedProps());
  }

  searchIssuesByRepoFullName(repoFullName) {
    this.issueSearchService.searchByRepoFullName(repoFullName)
      .then(issues => {
        this.selectedRepoIssues = issues;
      })
      .catch(err => {
        // TODO proper error handling
        console.error(err);
        this.selectedRepoIssues = [];
      });
  }

  handleOnRepositoryClick(repositoryId) {
    // TODO more FP-ish
    const findRepoByRepositoryId = R.find(repository => repository.id === repositoryId);
    const repo = findRepoByRepositoryId(this.repositories);

    this.selectedRepo = repo;
    this.searchIssuesByRepoFullName(this.selectedRepo.fullName);
  }
}

export default {
  template,
  controller: AppController,
};
