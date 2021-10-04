import axios from 'axios'
import { getRandomInt } from '/src/services/utils'
import { POKEMON_COUNT } from '/src/services/constants/pokemon'
import types from './types'

const getInformationRequest = () => ({
  type: types.FETCH_POKEMON_INFO_REQUEST,
})

const getInformationSuccess = (json) => ({
  type: types.FETCH_INFORMATION_SUCCESS,
  data: json,
})

const getInformationFailure = (error) => ({
  type: types.FETCH_INFORMATION_FAILURE,
  error,
})

const getInformation = (pokemonId: string | null = null) => {
  const randomNumber = pokemonId ? pokemonId : getRandomInt(1, POKEMON_COUNT)
  const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}`

  return (dispatch) => {
    dispatch(getInformationRequest())
    return axios
      .get(pokemonDetailUrl)
      .then((res) => dispatch(getInformationSuccess(res.data)))
      .catch((err) => dispatch(getInformationFailure(err)))
  }
}

export { getInformation }
