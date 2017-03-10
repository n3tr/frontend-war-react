
function fetchGitHubAPIWithPath(path) {
  return fetch(`https://api.github.com${path}`).then( res => res.json() )
}

// Since Github doesn't have pr count in repo object
// we need to use search api to search issue with type pr and open
// This will return json look like
// {
//   "total_count": 109,
//   "incomplete_results": false,
//   "items" : []
// }
function fetchPRCount(scopeName) {
  const searchString = encodeURIComponent(`repo:${scopeName} type:pr is:open`)
  const path = `/search/issues?q=${searchString}`
  return fetchGitHubAPIWithPath(path)
}

// Get repo data with scopeName "user/repo"
function fetchRepoInfo(scopeName) {
  return fetchGitHubAPIWithPath(`/repos/${scopeName}`)
}

export function fetchRepository(scopeName) {
  return Promise.all([fetchRepoInfo(scopeName), fetchPRCount(scopeName)])
  .then((values) => {
    const [ repo, searchResult ] = values
    const pull_requests_count = searchResult.total_count
    return { ...repo, pull_requests_count }
  })
}
