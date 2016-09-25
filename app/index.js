import angular from 'angular';
import issueSearchService from './services/issue-search.service';
import repositorySearchService from './services/repository-search.service';
import appComponent from './components/app/app.component';
import contentComponent from './components/content/content.component';
import issueCardComponent from './components/issue-card/issue-card.component';
import issueListComponent from './components/issue-list/issue-list.component';
import repositoryCardComponent from './components/repository-card/repository-card.component';
import repositoryListComponent from './components/repository-list/repository-list.component';
import searchPanelComponent from './components/search-panel/search-panel.component';

export default angular.module('app', [])
  .factory('issueSearchService', issueSearchService)
  .factory('repositorySearchService', repositorySearchService)
  .component('app', appComponent)
  .component('content', contentComponent)
  .component('issueCard', issueCardComponent)
  .component('issueList', issueListComponent)
  .component('repositoryCard', repositoryCardComponent)
  .component('repositoryList', repositoryListComponent)
  .component('searchPanel', searchPanelComponent);
