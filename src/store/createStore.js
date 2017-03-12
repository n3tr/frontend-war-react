import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from '../reducers'
import * as api from '../api'

function initialStore() {
  const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
  )
  return store
}



export default initialStore
