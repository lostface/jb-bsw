import angular from 'angular';
import issueCardComponent from './components/issue-card/issue-card.component';
import repositoryCardComponent from './components/repository-card/repository-card.component';
import repositoryListComponent from './components/repository-list/repository-list.component';

export default angular.module('app', [])
  .component('issueCard', issueCardComponent)
  .component('repositoryCard', repositoryCardComponent)
  .component('repositoryList', repositoryListComponent);
