import Text from './Text'

type Props = {
  text: string
  onClick: any
}

const Button: React.FC<Props> = ({ text, onClick }) => (
  <button type="button" onClick={onClick} className="button red">
    <Text size="small" className="white">
      {text}
    </Text>
  </button>
)

export default Button
