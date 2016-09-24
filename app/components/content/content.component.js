import template from './content.component.html';

export default {
  template,
  bindings: {
    repositories: '<',
    selectedRepoFullName: '@',
    selectedRepoIssues: '<',
  },
};
