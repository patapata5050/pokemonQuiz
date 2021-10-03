import { useEffect } from 'react'
import styles from '../styles/pages/answer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getInformation } from '../store/ducks/pokemon/operations'
import Answer from '../layout/answer'

const AnswerPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchInformation = () => {
      dispatch(getInformation())
    }
    fetchInformation()
  }, [dispatch])

  const isFetched = useSelector((state) => state.pokemonState.pokemon.isFetched)

  if (isFetched) {
    return (
      <div>
        <Answer />
      </div>
    )
  }

  return <div className={styles.loading}>Now loading...</div>
}

export default AnswerPage
