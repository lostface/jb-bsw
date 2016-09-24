import template from './app.component.html';

class AppController {
  $onInit() {
    this.repositories = [];
    this.issues = [];
  }
}

export default {
  template,
  controller: AppController,
};
