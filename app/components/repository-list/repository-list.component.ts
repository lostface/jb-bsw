import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Repository, RepositoryId } from '../../app.types';

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
  @Input() public repositories: Repository[];
  @Output() public repositoryClick = new EventEmitter<RepositoryId>();

  // TODO duplicate: trackById(index: number, obj: { id })
  trackById(index: number, repository: Repository): RepositoryId {
    return repository.id;
  }
}
