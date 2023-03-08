import style from "@/styles/Gallery.module.css"
import Head from "next/head"
import Hero from "./Hero"
import ImageList from "./ImageList"

export default function gallery() {
  return (
    <div className={style.main}>
        <Head>
          <title>One Love Ethiopia | Gallery</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <ImageList />
    </div>
  )
}
