import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'repository-list',
  template: `
    <div id="repository-list-container">
      <p>Repo List</p>

      <ul id="repository-list">
        <li *ngFor="let repository of repositories trackBy: trackById" >
          <repository-card
            [repository]=repository
            (click)="repositoryClick.emit(repository.id)"
          ></repository-card>
        </li>
      </ul>
    </div>
  `,
})

export default class RepositoryListComponent {
  @Input() public repositories: any[];
  @Output() public repositoryClick: EventEmitter<number> = new EventEmitter();

  trackById(index: number, repository): void {
    return repository.id;
  }
}
