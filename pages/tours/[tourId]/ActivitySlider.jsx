import { useState, useRef, useEffect } from 'react'
import style from "@/styles/Tours.module.css"
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

export default function ActivitySlider({tour}) {

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
    }, [currentSlide, nextSlide, prevSlide])

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
