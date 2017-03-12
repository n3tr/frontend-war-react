
import { combineReducers } from 'redux'
import repositoryByName from './repositoryByName'

export default combineReducers({
  byName: repositoryByName
})
