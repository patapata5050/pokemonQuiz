import Text from '../component/Text'
import Button from '../component/Button'
import { pokemonSelectors } from '../store/ducks/pokemon'

const Answer = () => {
  const originalName = pokemonSelectors.getOriginalName()
  return (
    <div className="answer">
      <Text size="large" bold={true}>
        第1問
      </Text>
      <img src="https://placehold.jp/200x200.png" alt="sample" />
      <Text size="small" bold={true}>
        「{originalName}」の英語名はなに？
      </Text>
      <input type="text" />
      <Button text="答える" />
    </div>
  )
}

export default Answer
