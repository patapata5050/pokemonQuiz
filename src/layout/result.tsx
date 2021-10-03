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

  const result = isCorrect
    ? {
      label: '正解！',
      color: 'red',
    }
    : {
      label: '残念...',
      color: 'blue',
    }

  const ButtonElements = () => {
    if (isCorrect) {
      return <Button text="次の問題" onClick={() => router.push('/answer')} />
    }
    return <Button text="ホームへ" onClick={() => router.push('/')} />
  }

  return (
    <div className={styles.pageResult}>
      <img
        className={styles.pokemonImg}
        src={`https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokemonId}.png`}
      />
      <Text size="large" color={result.color}>
        {result.label}
      </Text>
      <Text size="large" bold>
        <span style={{ fontSize: 18 }}>答えは</span>
        {translatedName}
      </Text>
      {ButtonElements()}
    </div>
  )
}

export default Result
