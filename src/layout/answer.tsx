import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/pages/answer.module.scss'
import Text from '../component/Text'
import Button from '../component/Button'
import { pokemonSelectors } from '../store/ducks/pokemon'

const Answer = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')
  const originalName = pokemonSelectors.getOriginalName()
  console.log('答え', pokemonSelectors.getTranslatedName())
  // ポケモンIDを3桁で取得
  const pokemonId = ('000' + pokemonSelectors.getPokemonId()).slice(-3)

  // リロード対策用にポケモンIDをセットしておき、ポケモンIDが保持されていたらそのポケモンがロードされるようにする
  localStorage.setItem('pokemonId', pokemonId)

  const [answer, setAnswer] = useState('')

  const quizNumber = localStorage.getItem('quizNumber')

  const checkAnswer = () => {
    // 答えが未入力の場合
    if (!answer) {
      setErrorMessage('答えを入力してね')
      return
    }
    localStorage.setItem('answer', answer)
    // 結果ページへ遷移
    router.push({
      pathname: '/result',
    })
  }

  return (
    <div className={styles.pageAnswer}>
      <Text size="large" bold={true}>
        第{quizNumber}問
      </Text>
      <img
        className={styles.pokemonImg}
        src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemonId}.png`}
      />
      <Text size="small" bold={true}>
        「{originalName}」の英語名はなに？
      </Text>
      <Text size="small" color="red">
        {errorMessage}
      </Text>
      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="答えを入力してね"
      />
      <Button text="答える" onClick={() => checkAnswer()} />
    </div>
  )
}

export default Answer
