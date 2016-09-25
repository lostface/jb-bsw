import R from 'ramda';
import template from './content.component.html';

class ContentController {
  constructor(issueSearchService, $scope) {
    'ngInject';
    this.issueSearchService = issueSearchService;

    $scope.$watch('$ctrl.repositories', () => {
      this.resetSelectedProps();
    });
  }

  $onInit() {
    this.resetSelectedProps();
  }

  resetSelectedProps() {
    this.selectedRepo = null;
    this.selectedRepoIssues = [];
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
  controller: ContentController,
  bindings: {
    repositories: '<',
  },
};
