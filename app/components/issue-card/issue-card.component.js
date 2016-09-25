import template from './issue-card.component.html';

export default {
  template,
  bindings: {
    id: '<',
    number: '<',
    title: '<',
    htmlUrl: '<',
    userLogin: '<',
    labels: '<',
    state: '<',
    comments: '<',
    createdAt: '<',
  },
};
