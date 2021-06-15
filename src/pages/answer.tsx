import Text from 'src/component/Text'
import Button from 'src/component/Button'

const Answer = () => {
  return (
    <div className="answer">
      <Text size="large" bold={true}>
        第1問
      </Text>
      <img src="https://placehold.jp/200x200.png" alt="sample" />
      <Text size="small" bold={true}>
        「ピカチュウ」の英語名はなに？
      </Text>
      <input type="text" />
      <Button text="答える" />
    </div>
  )
}

export default Answer
