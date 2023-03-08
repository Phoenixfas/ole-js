import style from '@/styles/Tours.module.css'
import Adventures from './Adventures'
import Featured from './Featured'
import Hero from './Hero'

export default function tours() {
  return (
    <div className={style.main}>
        <Hero />
        <Featured />
        <Adventures />
    </div>
  )
}
