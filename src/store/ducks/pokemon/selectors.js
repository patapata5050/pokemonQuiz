// selectors とは、state から必要な値を算出する関数のこと。state をシンプルに保つために、既存の state から算出できる値はすべて Selectors 経由で取得する。
import { useSelector } from "react-redux";

const getIsFetched = () => {
  return useSelector(state => state.pokemonState.pokemon.isFetched)
}

// MEMO: 多言語にする可能性があるので、originalNameとしている
// 日本語名を取得
const getOriginalName = () => {
  const names = useSelector(state => state.pokemonState.pokemon.data.names)
  const name = names.find(item => item.language.name === 'ja').name
  return name
}

// MEMO: 多言語にする可能性があるので、translatedNameとしている
// 英語名
const getTranslatedName = () => {
  const names = useSelector(state => state.pokemonState.pokemon.data.names)
  const name = names.find(item => item.language.name === 'en').name
  return name
}

const getPokemonId = () => {
  return useSelector(state => state.pokemonState.pokemon.data.id)
}

export default {
  getIsFetched,
  getOriginalName,
  getTranslatedName,
  getPokemonId
}