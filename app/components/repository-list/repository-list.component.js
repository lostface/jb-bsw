import template from './repository-list.component.html';

export default {
  template,
  bindings: {
    repositories: '<',
    onRepositoryClick: '&',
  },
};
