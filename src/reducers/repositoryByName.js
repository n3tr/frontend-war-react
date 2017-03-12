
export default function repositoryByName(state = {}, action) {
  switch (action.type) {
    case "FETCH_REPOSITORY_SUCCESS": {
      return {
        ...state,
        [action.data.full_name] : action.data
      }
    }
    default:
      return state
  }
}
