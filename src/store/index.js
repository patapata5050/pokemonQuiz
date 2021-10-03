import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import * as reducers from './ducks'

// redux-loggerの設定
const logger = createLogger({
  diff: true,
})

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
