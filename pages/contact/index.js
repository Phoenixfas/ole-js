import style from '@/styles/Contact.module.css'
import Head from 'next/head'
import Contact from './Contact'
import Hero from './Hero'

export default function contact() {
  return (
    <div className={style.main}>
        <Head>
          <title>One Love Ethiopia | Contact</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <Contact />
    </div>
  )
}
