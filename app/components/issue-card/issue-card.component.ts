import { Component, Input } from '@angular/core';
import { Issue } from '../../app.types';

@Component({
  selector: 'issue-card',
  template: `
    <div id="issue-card-container-{{issue.id}}">
      <p>Issue Card</p>
      <p>
        {{issue.number}}
        {{issue.title}}
        {{issue.htmlUrl}}
        {{issue.userLogin}}
        {{issue.labels}}
        {{issue.state}}
        {{issue.comments}}
        {{issue.createdAt}}
      </p>
    </div>
  `,
})

export default class IssueCardComponent {
  @Input() public issue: Issue;
}
