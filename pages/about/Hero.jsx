import style from '../../styles/Contact.module.css'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
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
      }, []);

  return (
    <div ref={elementRef} className={style.hero}>
        <ParallaxProvider>
            <Parallax speed={-20} className={style.hero__img}>
                <Image src='/images/gallery/gathering8.jpg' alt="About Us" fill />
            </Parallax>
        </ParallaxProvider>
        <div className={style.hero__text}>
            <motion.div initial={{y: "100%", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 5, stiffness: 50, bounce: 0.8, type: "spring" }} className={style.hero__text__title}>
                About Us
            </motion.div>
        </div>
    </div>
  )
}
