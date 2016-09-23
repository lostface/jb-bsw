import angular from 'angular';

const appModule = require('./index');

// TODO
console.log(appModule.name);

angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name]);
});
