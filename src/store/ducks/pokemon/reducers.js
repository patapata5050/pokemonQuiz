import { combineReducers } from 'redux'
import types from './types'

const initialState = {
  isFetched: false,
  data: {
    id: 1,
    names: []
  },
}

const pokemon = (state = [initialState], action) => {
  switch (action.type) {
    case types.FETCH_POKEMON_INFO_REQUEST:
      return {
        ...state,
        isFetched: false,
        data: {
          names: []
        },
      }
    case types.FETCH_INFORMATION_SUCCESS:
      return {
        ...state,
        isFetched: true,
        data: {
          id: action.data.id,
          names: action.data.names
        }
      }
    case types.FETCH_INFORMATION_FAILURE:
      return {
        ...state,
        isFetched: true,
        error: action.error,
      }
    case types.SET_INITIAL_STATES:
      return {
        ...initialState
      }
    default:
      return state
  }
}

const pokemonReducer = combineReducers({
  pokemon,
})

export default pokemonReducer
