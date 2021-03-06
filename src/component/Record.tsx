import Text from './Text'
import Image from 'next/image'
import styles from '/src/styles/component/record.module.scss'

const Record: React.FC<{ record: number }> = ({ record }) => {
  const recordText = record !== 0 ? `${record}問連続正解` : '記録なし'

  return (
    <div className={styles.record}>
      <Image src="/monsterBall.svg" width={50} height={50}></Image>
      <Text size="medium" bold="bold" className={styles.recordText}>
        {recordText}
      </Text>
    </div>
  )
}

export default Record
