import { combineReducers } from 'redux'
import types from './types'

const initialState = {
  isFetched: false,
  data: {
    names: []
  },
}

const pokemon = (state = [initialState], action) => {
  console.log("action.data", action.data)
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
          names: action.data.names
        }
      }
    case types.FETCH_INFORMATION_FAILURE:
      return {
        ...state,
        isFetched: true,
        error: action.error,
      }
    default:
      return state
  }
}

const pokemonReducer = combineReducers({
  pokemon,
})

export default pokemonReducer
