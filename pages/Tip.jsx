import React from 'react'
import style from '../styles/Home.module.css'
import { facts } from '@/data/tips'
import { useAppDispatch } from '@/redux/hooks'
import { changeActiveTip } from '@/redux/slices/activeTipSlice'
import { toggleTipModal } from '@/redux/slices/tipModalToggleSlice'
import Link from 'next/link'

export default function Tips() {
    const dispatch = useAppDispatch()

    const f = facts.slice(3, 6)

  return (
    <div className={style.tips}>
        <h1>Travel Tips and Facts</h1>
        <div className={style.tips__cardsContainer}>
            {f.map((fact, i) => (
                <div key={i} className={style.tips__card} onClick={() => {
                    dispatch(changeActiveTip(fact))
                    dispatch(toggleTipModal())
                }}>
                    <div className={style.tips__card__tr}></div>
                    <div className={style.tips__card__bl}></div>
                    <div className={style.tips__cardContent}>
                        <h2>{fact.name}</h2>
                        <p>{fact.description.substr(0, 300)}</p>
                    </div>
                </div>
            ))}
        </div>  
        <div className={style.tips__more}>
            <Link href="/tips" className={style.tips__moreBtn}>more</Link>
        </div>
    </div>
  )
}
