import style from '@/styles/Tours.module.css'
import Head from 'next/head'
import Book from './Book'

export default function book() {
  return (
    <div className={style.main}>
        <Head>
          <title>One Love Ethiopia | Book a Tour</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Book />
    </div>
  )
}
