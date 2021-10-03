import axios from 'axios'
import getRandomInt from '/src/services/utils'
import POKEMON_COUNT from '/src/services/constants/pokemon'

const fetchPokemonInfo = () => {
  const randomNumber = getRandomInt(1, POKEMON_COUNT)
  const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}`
  console.log('URL', pokemonDetailUrl)

  axios
    .get(pokemonDetailUrl)
    .then((response) => {
      // handle success
      console.log(response.data)
      const object = response.data.names

      const jp = object.find((item) => item.language.name === 'ja-Hrkt')
      const en = object.find((item) => item.language.name === 'en')

      // console.log('名前', jp.name)
      // console.log('name', en.name)
      return [jp.name, en.name]
    })
    .catch((error) => {
      // handle error
      console.log(error)
    })
    .then(() => {
      // always executed
    })
}

export default fetchPokemonInfo
