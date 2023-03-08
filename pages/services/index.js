import style from "@/styles/About.module.css";
import Head from "next/head";
import Hero from "./Hero";
import Services from "./Services";

export default function service() {
  return (
    <div className={style.main}>
        <Head>
          <title>One Love Ethiopia | Services</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Hero />
        <Services />
    </div>
  )
}
