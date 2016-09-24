import template from './issue-list.component.html';

export default {
  template,
  bindings: {
    repoFullName: '@',
    issues: '<',
  },
};
