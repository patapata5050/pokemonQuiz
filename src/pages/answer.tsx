import { useEffect, useState } from 'react'
import styles from '../styles/pages/answer.module.scss'
import { useDispatch } from 'react-redux'
import {
  getInformation,
  setInitialStates,
} from '../store/ducks/pokemon/operations'
import Answer from '../layout/answer'
import { pokemonSelectors } from '../store/ducks/pokemon'

const AnswerPage = () => {
  const dispatch = useDispatch()
  const [initialized, setInitialized] = useState(false)
  const isFetched = pokemonSelectors.getIsFetched()

  useEffect(() => {
    // Storeの値を初期化
    dispatch(setInitialStates())
    setInitialized(true)

    const pokemonIdString = localStorage.getItem('pokemonId')
    const pokemonId = pokemonIdString ? parseInt(pokemonIdString) : null

    const fetchInformation = (pokemonId: number | null = null) => {
      dispatch(getInformation(pokemonId))
    }
    fetchInformation(pokemonId)
  }, [dispatch])

  // FIXME: isFetchedのみで判定したいところだが、パッとやり方が思いつかなかった
  // isFetchのみで判定すると、クイズ不正解 -> ホーム -> 回答画面に来たときに同じポケモンが取得される
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
