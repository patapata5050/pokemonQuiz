import classNames from 'classnames'

type Props = {
  children: React.ReactNode
  size: string
  bold?: string
  style?: { [key: string]: string }
  className?: string
}

const Text: React.FC<Props> = ({ children, size, bold, style, className }) => {
  // fontサイズを定義
  const fontStyle = new Map([
    ['large', 'f36'],
    ['medium', 'f24'],
    ['small', 'f18'],
  ])

  const classes = classNames('text', fontStyle.get(size), className, {
    bold,
  })

  return (
    <p style={style} className={classes}>
      {children}
    </p>
  )
}

export default Text
