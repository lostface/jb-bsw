import template from './content.component.html';

class ContentController {
  $onInit() {
    // TODO temporary data
    this.selectedRepo = null;

    // TODO temporary data
    this.selectedRepoIssues = [
      { id: '123', title: 'title 1' },
      { id: '456', title: 'title 2' },
      { id: '789', title: 'title 3' },
    ];
  }

  handleOnRepositoryClick(repositoryId) {
    // TODO
    console.log('heyo', repositoryId)
  }
}

export default {
  template,
  controller: ContentController,
  bindings: {
    repositories: '<',
  },
};
