import { useEffect, useState } from 'react'
import styles from '../styles/pages/index.module.scss'
import Index from '../layout'

const IndexPage: React.FC = () => {
  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    // 初期処理
    const record = localStorage.getItem('record')

    // 初回時の処理
    localStorage.removeItem('pokemonId')
    localStorage.removeItem('quizNumber')
    // クイズ番号
    localStorage.setItem('quizNumber', '1')
    if (!record) {
      // 連続正解記録
      localStorage.setItem('record', '0')
    }
    setInitialized(true)
  }, [])

  if (initialized) {
    return <Index></Index>
  }

  return <div className={styles.loading}>Now loading...</div>
}

export default IndexPage
