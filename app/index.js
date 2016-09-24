import angular from 'angular';
import repositoryCardComponent from './components/repository-card/repository-card.component';

export default angular.module('app', [])
  .component('repositoryCard', repositoryCardComponent);
