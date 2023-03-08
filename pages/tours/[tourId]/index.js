import style from "@/styles/Tours.module.css"
import Image from "next/image"
import tours from "../../../data/tour"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
// import ActivitySlider from "./ActivitySlider"
import Link from "next/link"
import { useRouter } from "next/router"
import Head from "next/head"
import { useEffect, useState, useRef } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { changeActiveTour } from "@/redux/slices/activeTourSlice"
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'



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
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {tourId} = router.query;
    const [t, setT] = useState();

    useEffect(() => {
        if (tourId) {
            const tour = tours.find(t => t.id.toString() === tourId);
            setT(tour);
            dispatch(changeActiveTour(tour));
        }
    }, [tourId, dispatch])

    if (!t) return (
        <div className={style.main}>
            <h1 className={style.notfound}>Tour not found</h1>
        </div>
    )

  return (
    <>
        {t && (
            <div className={style.main}>
                <div className={style.tour}>
                    <ParallaxProvider>
                        <div className={style.tour__background}>
                            <Parallax speed={-50} className={style.tour__img}>
                                <Image src={t.image} alt={t.name} fill />
                            </Parallax>
                        </div>
                    </ParallaxProvider>
                    <div className={style.tour__container}>
                        <div className={style.tour__title}>
                            <h1>{t.name}</h1>
                            <p>{t.description}</p>
                        </div>
                        <ActivitySlider tour={t} />
                        <div className={style.tour__additional}>
                            {t.included && (
                                <>
                                    <p><span>Whats Included?</span></p>
                                    <ul>
                                        {t.included.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {t.not_included && (
                                <>
                                    <p><span>Whats Not Included?</span></p>
                                    <ul>
                                        {t.not_included.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {t.nb && (
                                <p><span>NB:</span> {t.nb}</p>
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



const ActivitySlider = ({tour}) => {
    // const tour = useAppSelector(state => state.activeTour);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= (tour.activities.length - 1) * 100) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 100);
        }
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide((tour.activities.length - 1) * 100);
        } else {
            setCurrentSlide(currentSlide - 100);
        }
    }

    
    useEffect(() => {
        const slider = slideRef.current;
        slider.style.setProperty('--slide-translate', `-${currentSlide}%`);

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        }

        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            clearInterval(interval);
        }
    }, [currentSlide])

  return (
    <div  className={style.slider}>
        <div className={style.slider__prev} onClick={() => prevSlide()}><BsArrowLeft /></div>
        <div className={style.slider__next} onClick={() => nextSlide()}><BsArrowRight /></div>
        <div className={style.sliderHolder}>
            <div ref={slideRef} className={style.slider__container}>
                {tour.activities.map((activity, index) => (
                    <div key={index} className={style.slide}>
                        <h3>Day {activity.day}</h3>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}