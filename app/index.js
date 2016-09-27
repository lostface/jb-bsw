import angular from 'angular';
import IssueSearchService from './services/issue-search.service';
import RepositorySearchService from './services/repository-search.service';
import appComponent from './components/app/app.component';
import contentComponent from './components/content/content.component';
import issueCardComponent from './components/issue-card/issue-card.component';
import issueListComponent from './components/issue-list/issue-list.component';
import repositoryCardComponent from './components/repository-card/repository-card.component';
import repositoryListComponent from './components/repository-list/repository-list.component';
import searchPanelComponent from './components/search-panel/search-panel.component';

export default angular.module('app', [])
  .service('issueSearchService', IssueSearchService)
  .service('repositorySearchService', RepositorySearchService)
  .component('app', appComponent)
  .component('content', contentComponent)
  .component('issueCard', issueCardComponent)
  .component('issueList', issueListComponent)
  .component('repositoryCard', repositoryCardComponent)
  .component('repositoryList', repositoryListComponent)
  .component('searchPanel', searchPanelComponent);
