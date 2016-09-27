import { Component, Input } from '@angular/core';
import { Repository } from '../../app.types';

@Component({
  selector: 'repository-card',
  template: `
    <div id="repository-card-container-{{repository.id}}" >
      <p>Repo Card</p>
      <p>
        {{repository.name}}
        {{repository.fullName}}
        {{repository.htmlUrl}}
        {{repository.description}}
        {{repository.stargazersCount}}
        {{repository.watchersCount}}
        {{repository.language}}
        {{repository.forksCount}}
        {{repository.openIssuesCount}}
      </p>
    </div>
  `,
})

export default class RepositoryCardComponent {
  @Input() public repository: Repository;
}
