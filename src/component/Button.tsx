import classNames from 'classnames'
import styles from '/src/styles/component/button.module.scss'
import Text from './Text'

type Props = {
  text: string
  onClick?: any
}

const classes = classNames(styles.button, styles.red)

const Button: React.FC<Props> = ({ text, onClick }) => (
  <button type="button" onClick={onClick} className={classes}>
    <Text size="small" color="white">
      {text}
    </Text>
  </button>
)

export default Button
