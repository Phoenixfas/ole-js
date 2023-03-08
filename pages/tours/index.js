import style from '@/styles/Tours.module.css'
import Head from 'next/head'
import Adventures from './Adventures'
import Featured from './Featured'
import Hero from './Hero'

export default function tours() {
  return (
    <div className={style.main}>
        <Head>
          <title>One Love Ethiopia | Tours</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <Featured />
        <Adventures />
    </div>
  )
}
