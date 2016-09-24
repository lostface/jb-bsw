import template from './repository-card.component.html';

export default {
  template,
  bindings: {
    id: '@',
    name: '@',
    fullName: '@',
    htmlUrl: '@',
    description: '@',
    stargazersCount: '@',
    watchersCount: '@',
    language: '@',
    forksCount: '@',
    openIssuesCount: '@',
  },
};
