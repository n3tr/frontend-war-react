

export default function fetchRepository(scopeName) {
  return (dispatch, getState, api) => {
    const { fetchRepository } = api

    fetchRepository(scopeName).then( (repository) => {
      dispatch({
        type: 'FETCH_REPOSITORY_SUCCESS',
        data: repository
      })
    })
  }
}
