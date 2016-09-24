import angular from 'angular';
import issueCardComponent from './components/issue-card/issue-card.component';
import issueListComponent from './components/issue-list/issue-list.component';
import repositoryCardComponent from './components/repository-card/repository-card.component';
import repositoryListComponent from './components/repository-list/repository-list.component';
import searchPanelComponent from './components/search-panel/search-panel.component';

export default angular.module('app', [])
  .component('issueCard', issueCardComponent)
  .component('issueList', issueListComponent)
  .component('repositoryCard', repositoryCardComponent)
  .component('repositoryList', repositoryListComponent)
  .component('searchPanel', searchPanelComponent);
