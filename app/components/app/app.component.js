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

    const setRepositores = repositories => {
      this.repositories = repositories;
    };

    const handleError = err => {
      // TODO proper error handling
      console.error(err);
      setRepositores([]);
    };

    const resetSelectedProps = () => this.resetSelectedProps();

    this.repositorySearchService.search(query)
      .then(setRepositores)
      .catch(handleError)
      .finally(resetSelectedProps);
  }

  searchIssuesByRepoFullName(repoFullName) {
    const setSelectedRepoIssues = issues => {
      this.selectedRepoIssues = issues;
    };

    const handleError = err => {
      // TODO proper error handling
      console.error(err);
      setSelectedRepoIssues([]);
    };

    this.issueSearchService.searchByRepoFullName(repoFullName)
      .then(setSelectedRepoIssues)
      .catch(handleError);
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
