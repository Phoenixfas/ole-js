import style from "@/styles/About.module.css";
import About from "./About";
import Hero from "./Hero";


export default function about() {
  return (
    <div className={style.main}>
        <Hero />
        <About />
    </div>
  )
}
