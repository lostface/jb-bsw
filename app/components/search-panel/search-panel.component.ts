import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'search-panel',
  template: `
    <div id="search-panel-container">
      <p>Search</p>

      <input
        id="search-query"
        type="text"
        [(ngModel)]="query"
        (keydown.enter)="triggerSearch()"
        (keydown.escape)="resetQuery()"
        placeholder="repository"
        [attr.maxlength]="60"
      />

      <button id="search-button" (click)="triggerSearch()">Search</button>

      <button
        id="clear-button"
        (click)="handleClearButtonClick()"
        [disabled]="isQueryEmpty()"
      >Clear</button>
    </div>
  `,
})

export default class SearchPanelComponent implements OnInit {
  public query: string;
  @Output() public searchTrigger = new EventEmitter<string>();
  @Output() public clearButtonClick = new EventEmitter<void>();

  ngOnInit(): void {
    this.resetQuery();
  }

  isQueryEmpty(): boolean {
    return this.query === '';
  }

  resetQuery(): void {
    this.query = '';
  }

  triggerSearch(): void {
    this.searchTrigger.emit(this.query);
  }

  handleClearButtonClick(): void {
    this.resetQuery();
    this.clearButtonClick.emit();
  }
}
