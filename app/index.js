import angular from 'angular';
import repositoryCardComponent from './components/repository-card/repository-card.component';
import issueCardComponent from './components/issue-card/issue-card.component';

export default angular.module('app', [])
  .component('issueCard', issueCardComponent)
  .component('repositoryCard', repositoryCardComponent);
