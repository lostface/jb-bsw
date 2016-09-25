import template from './app.component.html';

class AppController {
  constructor(repositorySearchService) {
    'ngInject';
    this.repositorySearchService = repositorySearchService;
  }

  $onInit() {
    this.repositories = [];
  }

  handleOnSearchButtonClick(query) {
    // small hack to allow "empty" search
    query = query ? query : 'size:>=0';

    this.repositorySearchService.search(query)
      .then(repositories => {
        this.repositories = repositories;
      })
      .catch(err => {
        // TODO proper error handling
        console.error(err);
        this.repositories = [];
      });
  }

  handleOnClearButtonClick() {
    // initiate an "empty" search
    this.handleOnSearchButtonClick('');
  }
}

export default {
  template,
  controller: AppController,
};
