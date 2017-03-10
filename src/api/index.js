
export function fetchRepository(scopeName) {
  return fetch(`https://api.github.com/repos/${scopeName}`)
  .then((res) => {
    return res.json()
  })
}
