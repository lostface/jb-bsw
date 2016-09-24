import template from './app.component.html';

class AppController {
  $onInit() {
    // TODO temporary data
    this.repositories = [
      { id: '123', name: 'repo 1' },
      { id: '456', name: 'repo 2' },
      { id: '789', name: 'repo 3' },
    ];
  }

  handleOnSearchButtonClick(query) {
    // TODO

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
