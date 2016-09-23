import angular from 'angular';
import appModule from './index';

angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name]);
});
