import template from './repository-card.component.html';

export default {
  template,
  controller: RepositoryCardController,
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

function RepositoryCardController() {

}
