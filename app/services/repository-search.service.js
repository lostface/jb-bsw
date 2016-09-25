import R from 'ramda';

// TODO extract to constants
const URL_SEARCH_REPOSITORIES = 'https://api.github.com/search/repositories';

export default repositorySearchService;

function repositorySearchService($http) {
  'ngInject';

  return {
    search
  };

  function search(query) {
    return $http.get(URL_SEARCH_REPOSITORIES, {
      params: { q: query },
    })
      .then(response => response.data)
      .then(data => data.items)
      .then(R.map(toRepository));
  }
}

function toRepository(rawRepository) {
  return {
    id: rawRepository.id,
    name: rawRepository.name,
    fullName: rawRepository.full_name,
    htmlUrl: rawRepository.html_url,
    description: rawRepository.description,
    stargazersCount: rawRepository.stargazers_count,
    watchersCount: rawRepository.watchers_count,
    language: rawRepository.language,
    forksCount: rawRepository.forks_count,
    openIssuesCount: rawRepository.open_issues_count,
  };
}
