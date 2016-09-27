import { Component, Input } from '@angular/core';

@Component({
  selector: 'issue-list',
  template: `
    <div id="issue-list-container">
      <p>Issue List</p>
      <p>Repo {{repoFullName}}</p>

      <ul id="issue-list">
        <li *ngFor="let issue of issues trackBy: trackById" >
          <issue-card [issue]="issue"></issue-card>
        </li>
      </ul>
    </div>
  `,
})

export default class IssueListComponent {
  @Input() public repoFullName: string;
  @Input() public issues: any[];

  // TODO duplicate: trackById(index: number, obj: { id })
  trackById(index: number, issue): void {
    return issue.id;
  }
}
