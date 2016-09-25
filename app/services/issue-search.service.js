import R from 'ramda';

// TODO extract to constants
const URL_SEARCH_ISSUES = 'https://api.github.com/search/issues';

export default function issueSearchService($http) {
  'ngInject';

  return {
    search,
    searchByRepoFullName,
  };

  function search(query) {
    return $http.get(URL_SEARCH_ISSUES, {
      params: { q: query },
    })
      .then(response => response.data)
      .then(data => data.items)
      .then(R.map(toIssue));
  }

  function searchByRepoFullName(repoFullName) {
    return search(`repo:${repoFullName}`);
  }
}

function toIssue(rawIssue) {
  return {
    id: rawIssue.id,
    number: rawIssue.number,
    title: rawIssue.title,
    htmlUrl: rawIssue.html_url,
    userLogin: rawIssue.user_login,
    labels: R.pluck('name', rawIssue.labels),
    state: rawIssue.state,
    comments: rawIssue.comments,
    createdAt: rawIssue.created_at,
  };
}
