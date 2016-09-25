import template from './app.component.html';

class AppController {
  constructor(repositorySearchService) {
    'ngInject';
    this.repositorySearchService = repositorySearchService;
  }

  $onInit() {
    this.repositories = [];
    // initiate an "empty" search
    this.searchRepositories('');
  }

  searchRepositories(query) {
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
}

export default {
  template,
  controller: AppController,
};
