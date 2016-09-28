import angular from 'angular';
import IssueSearchService from './services/issue-search.service';
import RepositorySearchService from './services/repository-search.service';
import AppComponent from './components/app/app.component';
import ContentComponent from './components/content/content.component';
import IssueCardComponent from './components/issue-card/issue-card.component';
import IssueListComponent from './components/issue-list/issue-list.component';
import RepositoryCardComponent from './components/repository-card/repository-card.component';
import RepositoryListComponent from './components/repository-list/repository-list.component';
import SearchPanelComponent from './components/search-panel/search-panel.component';

export default angular.module('app', ['ngMaterial'])
  .service('issueSearchService', IssueSearchService)
  .service('repositorySearchService', RepositorySearchService)
  .component('app', AppComponent)
  .component('content', ContentComponent)
  .component('issueCard', IssueCardComponent)
  .component('issueList', IssueListComponent)
  .component('repositoryCard', RepositoryCardComponent)
  .component('repositoryList', RepositoryListComponent)
  .component('searchPanel', SearchPanelComponent);
