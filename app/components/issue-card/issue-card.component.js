import template from './issue-card.component.html';

export default {
  template,
  controller: IssueCardController,
  bindings: {
    id: '@',
    number: '@',
    title: '@',
    htmlUrl: '@',
    userLogin: '@',
    labels: '@',
    state: '@',
    comments: '@',
    createdAt: '@',
  },
};

function IssueCardController() {

}
