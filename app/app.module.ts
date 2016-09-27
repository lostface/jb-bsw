import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import IssueSearchService from './services/issue-search.service';
import RepositorySearchService from './services/repository-search.service';
import AppComponent from './components/app/app.component';
import SearchPanelComponent from './components/search-panel/search-panel.component';
import ContentComponent from './components/content/content.component';
import RepositoryListComponent from './components/repository-list/repository-list.component';
import RepositoryCardComponent from './components/repository-card/repository-card.component';
import IssueListComponent from './components/issue-list/issue-list.component';
import IssueCardComponent from './components/issue-card/issue-card.component';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],

  providers: [
    RepositorySearchService,
    IssueSearchService,
  ],

  declarations: [
    AppComponent,
    SearchPanelComponent,
    ContentComponent,
    RepositoryListComponent,
    RepositoryCardComponent,
    IssueListComponent,
    IssueCardComponent,
  ],

  bootstrap: [AppComponent],
})

export default class AppModule {
}
