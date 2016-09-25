import template from './repository-card.component.html';

class RepositoryCardController {
  handleOnClick() {
    this.onClick({ repositoryId: this.repository.id });
  }
}

export default {
  template,
  controller: RepositoryCardController,
  bindings: {
    repository: '<',
    onClick: '&',
  },
};
