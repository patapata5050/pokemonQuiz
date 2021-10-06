import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Result from '../layout/result'
import styles from '../styles/pages/result.module.scss'
import { getInformation } from '../store/ducks/pokemon/operations'
import { pokemonSelectors } from '../store/ducks/pokemon'

const ResultPage = () => {
  const dispatch = useDispatch()
  const [initialized, setInitialized] = useState(false)
  const [answer, setAnswer] = useState('')
  const isFetched = pokemonSelectors.getIsFetched()

  useEffect(() => {
    setAnswer(localStorage.getItem('answer')!)
    setInitialized(true)

    // ポケモンの情報をfetch済の場合、再度取得しないようにする
    if (isFetched) {
      return
    }

    const pokemonIdString = localStorage.getItem('pokemonId')!
    const pokemonId = parseInt(pokemonIdString)

    const fetchInformation = (pokemonId: number) => {
      dispatch(getInformation(pokemonId))
    }
    fetchInformation(pokemonId)
  }, [])

  if (initialized && isFetched) {
    return (
      <div className="page-result">
        <Result answer={answer} />
      </div>
    )
  }

  return <div className={styles.loading}>Now loading...</div>
}

export default ResultPage
