import classNames from 'classnames'
import styles from 'src/styles/component/text.module.scss'

type Props = {
  children: React.ReactNode
  size: string
  bold?: boolean
  color?: string
  style?: { [key: string]: string }
  className?: string
}

// fontサイズを定義
const fontStyle = new Map([
  ['large', styles.f36],
  ['medium', styles.f24],
  ['small', styles.f18],
])

// fontカラーを定義
const fontColor = new Map([
  ['white', styles.white],
  ['black', styles.black],
])

const Text: React.FC<Props> = ({
  children,
  size,
  bold = false,
  color = 'black',
  style = {},
  className = '',
}) => {
  const classes = classNames(
    { [`${styles.bold}`]: bold },
    styles.text,
    fontStyle.get(size),
    fontColor.get(color),
    className
  )

  return (
    <p style={style} className={classes}>
      {children}
    </p>
  )
}

export default Text
