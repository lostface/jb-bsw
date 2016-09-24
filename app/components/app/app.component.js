import template from './app.component.html';

class AppController {
  $onInit() {
    // TODO temporary data
    this.repositories = [
      { id: '123', name: 'repo 1' },
      { id: '456', name: 'repo 2' },
      { id: '789', name: 'repo 3' },
    ];

    // TODO temporary data
    this.issues = [
      { id: '123', title: 'title 1' },
      { id: '456', title: 'title 2' },
      { id: '789', title: 'title 3' },
    ];
  }
}

export default {
  template,
  controller: AppController,
};
