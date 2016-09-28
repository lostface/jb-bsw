import R from 'ramda';

// TODO extract to constants
const URL_SEARCH_ISSUES = 'https://api.github.com/search/issues';

export default class IssueSearchService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  search(query) {
    const { $http } = this;
    return $http.get(URL_SEARCH_ISSUES, {
      params: { q: `${query} type:issue` },
    })
      .then(response => response.data)
      .then(data => data.items)
      .then(R.map(toIssue));
  }

  searchByRepoFullName(repoFullName) {
    return this.search(`repo:${repoFullName}`);
  }
}

function toIssue(rawIssue) {
  return {
    id: rawIssue.id,
    number: rawIssue.number,
    title: rawIssue.title,
    htmlUrl: rawIssue.html_url,
    userLogin: rawIssue.user.login,
    labels: R.pluck('name', rawIssue.labels),
    state: rawIssue.state,
    comments: rawIssue.comments,
    createdAt: rawIssue.created_at,
  };
}
