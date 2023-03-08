import Image from 'next/image'
import style from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { toggleInitHero } from '@/redux/slices/initHeroToggleSlice';
import { toggleHeaderColor } from '@/redux/slices/headerColorToggleSlice'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const progVariant = {
    init: {
        width: "0%",
    },
    anim: {
        width: "100%",
        transition: {
            duration: 5,
            ease: "linear"
        }
    }
}

export default function InitialHero() {
    const elementRef = useRef(null);
    const dispatch = useAppDispatch();
    const initHeroToggle = useAppSelector(state => state.initHeroToggle.value);
    const [disable, setDisable] = useState(false);

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        if(slide >= 4) {
            setSlide(1);
            return;
        }
        setSlide(slide + 1);
    }

    const prevSlide = () => {
        if(slide === 1) {
            setSlide(4);
            return;
        }
        setSlide(slide - 1);
    }
    
    useEffect(() => {
        if(disable) {
            dispatch(toggleInitHero(false));
        }

        setSlide(1);
        const slider = document.getElementById('hero_slider');
        let slides = document.querySelectorAll('.initHero__img');
        let pos = 2;
        function slide () {
            setSlide(pos);
            if (pos >= 5) {
                // setDisable(true);
                // clearInterval(interval);
                pos = 1;
                setSlide(pos);
            }
            pos++
        }
    
        let interval =  setInterval(slide , 5000);


        ////////////////////////////////////

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
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        }

    }, [disable])
    

  return (
    <>
        <AnimatePresence>
            {/* {initHeroToggle && ( */}
                <motion.div ref={elementRef} initial={{opacity: 0}} animate={{ opacity: 1 }} exit={{opacity:0}} transition={{duration: .3, ease: "linear"}} className={style.initHero} >
                    <div className={style.initHero__imgContainer}>
                        <div id='hero_slider' className={style.initHero__imgsSlider}>
                            <AnimatePresence>
                                {slide === 1 && (
                                    <motion.div key={1} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className={style.initHero__img}>
                                        <Image src='/images/home/hero/lalibela.jpg' alt='hero' fill />
                                        {/* <div className={style.initHero__textContainer}>
                                            <div className={style.initHero__text}>
                                                <H1 lines={["Escape to", "Paradise"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                                {slide === 2 && (
                                    <motion.div key={2} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className={style.initHero__img}>
                                        <Image src='/images/home/hero/gondar.jpg' alt='hero' fill />
                                        {/* <div className={style.initHero__textContainer}>
                                            <div className={style.initHero__text}>
                                                <H1 lines={["Discover", "Hidden Gems"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                                {slide === 3 && (
                                    <motion.div key={3} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className={style.initHero__img}>
                                        <Image src='/images/home/hero/omo.png' alt='hero' fill />
                                        {/* <div className={style.initHero__textContainer}>
                                            <div className={style.initHero__text}>
                                                <H1 lines={["Create", "Memories That", "Last a Lifetime"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                                {slide === 4 && (
                                    <motion.div key={4} initial={{filter: "brightness(0.2)", scale: 1.1}} animate={{filter: ["brightness(0.2)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(1)", "brightness(0.2)"], scale: [1.1, 1]}} transition={{duration: 5, ease: "easeInOut"}} className={style.initHero__img}>
                                        <Image src='/images/home/hero/danakil.jpg' alt='hero' fill />
                                        {/* <div className={style.initHero__textContainer}>
                                            <div className={style.initHero__text}>
                                                <H1 lines={["Unforgettable", "Experiences"]} />
                                            </div>
                                        </div> */}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className={style.initHero__textContainer}>
                        {slide === 1 && <div className={style.initHero__text}>
                            <H1 lines={["Escape to", "Paradise"]} />
                        </div>}
                        {slide === 2 && <div className={style.initHero__text}>
                            <H1 lines={["Discover", "Hidden Gems"]} />
                        </div>}
                        {slide === 3 && <div className={style.initHero__text}>
                            <H1 lines={["Create", "Memories That", "Last a Lifetime"]} />
                        </div>}
                        {slide === 4 && <div className={style.initHero__text}>
                            <H1 lines={["Unforgettable", "Experiences"]} />
                        </div>}
                    </div>
                    <div className={style.initHero__progContainer}>
                        <div className={style.initHero__prog}>
                            <div className={style.initHero__prog__outer}>
                                {slide === 1 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={style.initHero__prog__inner}></motion.div>}
                            </div>
                        </div>
                        <div className={style.initHero__prog}>
                            <div className={style.initHero__prog__outer}>
                                {slide === 2 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={style.initHero__prog__inner}></motion.div>}
                            </div>
                        </div>
                        <div className={style.initHero__prog}>
                            <div className={style.initHero__prog__outer}>
                                {slide === 3 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={style.initHero__prog__inner}></motion.div>}
                            </div>
                        </div>
                        <div className={style.initHero__prog}>
                            <div className={style.initHero__prog__outer}>
                                {slide === 4 && <motion.div variants={progVariant} initial={'init'} animate={'anim'} className={style.initHero__prog__inner}></motion.div>}
                            </div>
                        </div>
                    </div>
                    <div className={style.initHero__skip}>
                        <div className={`${style.initHero__skipBtn} ${style.slider__prev}`} onClick={() => prevSlide()}>
                            <BsArrowLeft />
                        </div>
                        <div className={`${style.initHero__skipBtn} ${style.slider__next}`} onClick={() => nextSlide()}>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            {/* )} */}
        </AnimatePresence>
    </>
  )
}


const H1 = ({ lines}) => {

    const containerVariants = {
      hidden: {
        opacity: 0,
        y: 100
      },
      visible: {
        opacity: [0, 1, 1, 1, 1, 1, 1, 0],
        y: [100, 0, 0, 0, 0, 0, 0, 0],
        transition: {
            duration: 5,
            ease: 'linear',
          staggerChildren: 0.3 // Add a slight delay between each line
        }
      }
    }
  
    const itemVariants = {
      hidden: {
        opacity: 0,
        y: 100
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }
  
  
    return (
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, index) => (
          <div key={index}>
            <motion.span variants={itemVariants} >
                {line}
            </motion.span>
            <br />
          </div>
        ))}
      </motion.h1>
    );
  };
  