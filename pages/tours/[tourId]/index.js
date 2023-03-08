import style from "@/styles/Tours.module.css"
import Image from "next/image"
import tours from "../../../data/tours"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import ActivitySlider from "./ActivitySlider"
import Link from "next/link"
import { useRouter } from "next/router"
import Head from "next/head"

export default function page() {
    return(
        <>
            <Head>
                <title>One Love Ethiopia | Tours</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Tour />
        </>
    )
}

const Tour = () => {
    const router = useRouter();
    const {tourId} = router.query;
    const tour = tours.find(t => t.id.toString() === tourId);

    if (!tour) return (
        <div className={style.main}>
            <h1 className={style.notfound}>Tour not found</h1>
        </div>
    )

  return (
    <>
        {tour && (
            <div className={style.main}>
                <div className={style.tour}>
                    <ParallaxProvider>
                        <div className={style.tour__background}>
                            <Parallax speed={-50} className={style.tour__img}>
                                <Image src={tour.image} alt={tour.name} fill />
                            </Parallax>
                        </div>
                    </ParallaxProvider>
                    <div className={style.tour__container}>
                        <div className={style.tour__title}>
                            <h1>{tour.name}</h1>
                            <p>{tour.description}</p>
                        </div>
                        <ActivitySlider tour={tour} />
                        <div className={style.tour__additional}>
                            {tour.included && (
                                <>
                                    <p><span>Whats Included?</span></p>
                                    <ul>
                                        {tour.included.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {tour.not_included && (
                                <>
                                    <p><span>Whats Not Included?</span></p>
                                    <ul>
                                        {tour.not_included.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {tour.nb && (
                                <p><span>NB:</span> {tour.nb}</p>
                            )}
                        </div>
                        <div className={style.bookBtn}>
                            <Link href={`/tours/book`}>Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}