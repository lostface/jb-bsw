import template from './repository-list.component.html';

class RepositoryListController {
}

export default {
  template,
  controller: RepositoryListController,
  bindings: {
    repositories: '<',
  },
};
