import angular from 'angular';
import R from 'ramda';
import template from './app.component.html';

class AppController {
  constructor(repositorySearchService, issueSearchService, $mdDialog) {
    'ngInject';
    this.repositorySearchService = repositorySearchService;
    this.issueSearchService = issueSearchService;
    this.$mdDialog = $mdDialog;
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

    this.showRepositoryDetailsDialog();
  }

  showRepositoryDetailsDialog() {
    const { $mdDialog } = this;

    $mdDialog.show({
      template: `
        <md-dialog>
          <md-toolbar>
            <div class="md-toolbar-tools">
              <h2>{{::$ctrl.repository.fullName}} Details</h2>
            </div>
          </md-toolbar>

          <md-dialog-content style="margin-left: 16px">
            <issue-list issues="$ctrl.repositoryIssues"></issue-list>
          </md-dialog-content>

          <md-dialog-actions layout="row">
            <md-button ng-click="$ctrl.hide()">Close</md-button>
          </md-dialog-actions>
        </md-dialog>
      `,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      escapeToClose: true,
      controller: () => {},
      controllerAs: '$ctrl',
      // TODO resolve can be used here so the dialog won't open until the promise
      //  is resolved
      locals: {
        repository: this.selectedRepo,
        repositoryIssues: this.selectedRepoIssues,
        hide: () => { $mdDialog.hide(); },
      },
      bindToController: true,
    });
  }
}

export default {
  template,
  controller: AppController,
};
