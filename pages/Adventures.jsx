import Image from 'next/image'
import style from '../styles/Home.module.css'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import tours from '@/data/tours'
import Link from 'next/link'

export default function Adventures() {
    const half = Math.ceil(tours.length / 2)
    const tours1 = tours.slice(0, half)
    const tours2 = tours.slice(half, tours.length)

    
  return (
    <div className={style.adventures}>
        <h1><i>Adventures</i> to get you inspired</h1>
        <div className={style.adventures_cardsContainer}>
            <Cards t={tours1} alignLeft={false} />
            <Cards t={tours2} alignLeft={true} />
        </div>
    </div>
  )
}


const Cards = ({t, alignLeft}) => {
    return (
        <div className={`${style.adventures__cardsHolder} ${alignLeft ? style.left : style.right}`}>
            {t.map((tour, index) => (
                <div key={index} className={style.adventures_card}>
                    <div className={style.adventures__cardImg}>
                        <Image src={tour.image} alt={tour.name} fill />
                    </div>
                    <Link href={`/tours/${tour.id}`} className={style.adventures__cardInfo}>
                        <p>0{tour.id}</p>
                        <h2>{tour.mainName}</h2>
                        <span><BsArrowRight size={35} /></span>
                    </Link>
                </div>
            ))}
        </div>
    )
}
