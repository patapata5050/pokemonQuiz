import { useRouter } from 'next/dist/client/router'
import styles from '../styles/pages/result.module.scss'
import Text from '../component/Text'
import Button from '../component/Button'
import { pokemonSelectors } from '../store/ducks/pokemon'

const Result = () => {
  const router = useRouter()
  // ポケモンIDを3桁で取得
  const pokemonId = ('000' + pokemonSelectors.getPokemonId()).slice(-3)
  const translatedName = pokemonSelectors.getTranslatedName()

  // 正誤判定
  const answer: string = router.query.answer as string
  const isCorrect = answer.toLowerCase() === translatedName.toLowerCase()

  // クイズ正解時
  if (isCorrect) {
    const quizNumber = parseInt(localStorage.getItem('quizNumber')!)
    localStorage.setItem('quizNumber', (quizNumber + 1).toString())

    const record = parseInt(localStorage.getItem('record')!)
    quizNumber > record
      ? localStorage.setItem('record', quizNumber.toString())
      : ''

    // クイズ不正解時
  } else {
    localStorage.setItem('quizNumber', '1')
  }

  const ButtonElements = () => {
    if (isCorrect) {
      return <Button text="次の問題" onClick={() => router.push('/answer')} />
    }
    return <Button text="ホームへ" onClick={() => router.push('/')} />
  }

  const ResultTextElements = () => {
    if (isCorrect) {
      return (
        <Text size="large" color="red">
          正解！
        </Text>
      )
    }
    return (
      <Text size="large" color="blue">
        残念...
      </Text>
    )
  }

  return (
    <div className={styles.pageResult}>
      <img
        className={styles.pokemonImg}
        src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemonId}.png`}
      />
      {ResultTextElements()}
      <Text size="large" bold>
        <span style={{ fontSize: 18 }}>答えは</span>
        {translatedName}
      </Text>
      {ButtonElements()}
    </div>
  )
}

export default Result
