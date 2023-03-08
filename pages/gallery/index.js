import style from "@/styles/Gallery.module.css"
import Hero from "./Hero"
import ImageList from "./ImageList"

export default function gallery() {
  return (
    <div className={style.main}>
        <Hero />
        <ImageList />
    </div>
  )
}
