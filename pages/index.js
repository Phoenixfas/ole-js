import { useAppSelector } from '@/redux/hooks'
import Head from 'next/head'
import style from '../styles/Home.module.css'
import Adventures from './Adventures'
import Hero from './Hero'
import InitialHero from './InitialHero'
import Pics from './Pics'
import Tip from './Tip'


export default function Home() {
  const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)
  return (
    <main className={style.main}>
      <Head>
        <title>One Love Ethiopia | Tour & Car Rent</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <InitialHero />
      {/* {!initHeroToggle && (
        <> */}
          {/* <Hero /> */}
          <Adventures />
          <Tip />
          <Pics />
        {/* </>
      )} */}
    </main>
  )
}
