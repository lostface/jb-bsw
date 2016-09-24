import template from './repository-card.component.html';

class RepositoryCardController {
  handleOnClick() {
    this.onClick({ repositoryId: this.id });
  }
}

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
    onClick: '&',
  },
};
