import template from './repository-list.component.html';

class RepositoryListController {
  $onInit() {
    // TODO remove temporary data
    this.repositories = [
      { id: '123', name: 'repo 1' },
      { id: '456', name: 'repo 2' },
      { id: '789', name: 'repo 3' },
    ];
  }
}

export default {
  template,
  controller: RepositoryListController,
  bindings: {
    repositories: '<',
  },
};
