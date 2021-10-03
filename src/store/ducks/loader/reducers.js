import { combineReducers } from 'redux'
import types from './types'

const initialState = {
  isLoading: false,
}

const loader = (state = [initialState], action) => {
  switch (action.type) {
    case types.START_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case types.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

const loaderReducer = combineReducers({
  loader,
})

export default loaderReducer
