import template from './issue-list.component.html';

class IssueListController {
  $onInit() {
    // TODO remove temporary data
    this.issues = [
      { id: '123', title: 'title 1' },
      { id: '456', title: 'title 2' },
      { id: '789', title: 'title 3' },
    ];
  }
}

export default {
  template,
  controller: IssueListController,
  bindings: {
    issues: '<',
  },
};
