import Head from 'next/head'
import styles from '../styles/pages/index.module.scss'
import Link from 'next/link'
import Text from '../component/Text'
import Button from '../component/Button'
// import SlideImages from 'src/component/SlideImages'
import Record from '../component/Record'
import { useEffect, useState } from 'react'

const Index: React.FC = () => {
  const [record, setRecord] = useState(0)
  useEffect(() => {
    const record = parseInt(localStorage.getItem('record')!)
    setRecord(record)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>ポケモン英語で言えるかな</title>
        <meta name="description" content="ポケモンの英語名を答えるクイズです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.pageHome}>
          <Text size="large" bold={true} className={styles.title}>
            ポケモン英語で
            <br />
            言えるかな
          </Text>
          {/* <SlideImages numbers={['001', '002', '003', '004']} /> */}
          <Record record={record} />
          <Link href="/answer">
            <Button text="スタート" />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Index
