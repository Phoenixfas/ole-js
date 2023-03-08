import style from '../../styles/Tips.module.css'
import React from 'react'
import Hero from './Hero'
import TipsList from './TipsList'
import Head from 'next/head'

export default function tips() {
  return (
    <div className={style.main}>
      <Head>
        <title>One Love Ethiopia | Tips & Facts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <TipsList />
    </div>
  )
}
