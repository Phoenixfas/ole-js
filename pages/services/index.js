import style from "@/styles/About.module.css";
import Hero from "./Hero";
import Services from "./Services";

export default function service() {
  return (
    <div className={style.main}>
        <Hero />
        <Services />
    </div>
  )
}
