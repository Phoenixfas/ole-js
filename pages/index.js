import { useAppSelector } from '@/redux/hooks'
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
