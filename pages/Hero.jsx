import style from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useAppDispatch } from '@/redux/hooks'
import { toggleHeaderColor } from '@/redux/slices/headerColorToggleSlice'

export default function Hero() {
    const elementRef = useRef(null);
    const dispatch = useAppDispatch()

    useEffect(() => {
        const element = elementRef.current;
        const handleScroll = () => {
          const { top, bottom } = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
      
          if (top > windowHeight || bottom < 0) {
            dispatch(toggleHeaderColor(false))
          } else {
            dispatch(toggleHeaderColor(true))
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [dispatch]);

  return (
    <div ref={elementRef} className={style.hero}>
        <ParallaxProvider>
            <Parallax speed={-50} className={style.hero__img}>
                <Image src='/images/home/hero/ertaale.jpg' alt="erta ale" fill />
            </Parallax>
            <Parallax speed={-30} className={style.hero__img}>
                <Image src='/images/home/hero/embers.png' alt="embers" fill />
            </Parallax>
        </ParallaxProvider>
        <div className={style.hero__text}>
            <motion.div initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 5, stiffness: 50, bounce: 0.8, type: "spring" }} className={style.hero__text__title}>
                ONE LOVE ETHIOPIA TOUR & CAR RENT
            </motion.div>
            <motion.div initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 5, delay: .3, stiffness: 50, bounce: 0.8, type: "spring" }} className={style.hero__text__desc}>
                Experience the wonders of Ethiopia and unlock your sense of adventure with us.
                <Link href='/tours' className={style.hero__text__descBtn}><FaArrowRight size={30} /> Explore Now</Link>
            </motion.div>
        </div>
    </div>
  )
}
