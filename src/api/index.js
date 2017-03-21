
// Private

// -
// Fetch Github api with given path
// -
function fetchGitHubAPIWithPath(path) {
  let headers = new Headers({
    "Authorization": `token fbedabf134e561e8515b0c939d4f7b7b17f749ff`
  })
  return fetch(`https://api.github.com${path}`, { headers }).then( res => res.json() )
}

// -
// Since Github doesn't have pr count in repo object
// we need to use search api to search issue with type pr and open
// This will return json look like
// {
//   "total_count": 109,
//   "incomplete_results": false,
//   "items" : []
// }
// -
function fetchPRCount(scopeName) {
  const searchString = encodeURIComponent(`repo:${scopeName} type:pr is:open`)
  const path = `/search/issues?q=${searchString}`
  return fetchGitHubAPIWithPath(path)
}

// Get repo data with scopeName "user/repo"
function fetchRepoInfo(scopeName) {
  return fetchGitHubAPIWithPath(`/repos/${scopeName}`)
}


// -
// Public Export

// -
// Fetch Repository Info with scope (eg 'facebook/react')
// response would look like
// https://api.github.com/repos/facebookincubator/create-react-app
// also including `pull_requests_count` field
export function fetchRepository(scopeName) {
  return Promise.all([fetchRepoInfo(scopeName), fetchPRCount(scopeName)])
  .then((values) => {
    const [ repo, searchResult ] = values
    const pull_requests_count = searchResult.total_count
    return { ...repo, pull_requests_count }
  })
}

// Fetch Repository's stargazers with scope (eg 'facebook/react')
// https://api.github.com/repos/angular/angular/stargazers?=page=0
export function fetchStargazers(scopeName, page=0, per_page=30) {
  return fetchGitHubAPIWithPath(
    `/repos/${scopeName}/stargazers?page=${page}&per_page=${per_page}`
  )
}
