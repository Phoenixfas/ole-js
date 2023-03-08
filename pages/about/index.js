import style from "@/styles/About.module.css";
import Head from "next/head";
import About from "./About";
import Hero from "./Hero";


export default function about() {
  return (
    <div className={style.main}>
        <Head>
          <title>One Love Ethiopia | About</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <About />
    </div>
  )
}
