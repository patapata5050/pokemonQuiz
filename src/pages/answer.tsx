import { useEffect, useState } from 'react'
import styles from '../styles/pages/answer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  getInformation,
  setInitialStates,
} from '../store/ducks/pokemon/operations'
import Answer from '../layout/answer'

const AnswerPage = () => {
  const dispatch = useDispatch()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Storeの値を初期化
    dispatch(setInitialStates())
    setInitialized(true)

    const pokemonIdString = localStorage.getItem('pokemonId')
    // const pokemonIdString = null
    const pokemonId = pokemonIdString ? parseInt(pokemonIdString) : null

    const fetchInformation = (pokemonId: number | null = null) => {
      dispatch(getInformation(pokemonId))
    }
    fetchInformation(pokemonId)
  }, [dispatch])

  const isFetched = useSelector((state) => state.pokemonState.pokemon.isFetched)

  // FIXME: isFetchedのみで判定したいところだが、パッとやり方が思いつかなかった
  if (initialized && isFetched) {
    return (
      <div>
        <Answer />
      </div>
    )
  }

  return <div className={styles.loading}>Now loading...</div>
}

export default AnswerPage
