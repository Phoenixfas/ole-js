import React from 'react'
import style from '../styles/Home.module.css'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { toggleFacilModal } from '@/redux/slices/facilModalToggleSlice'

export default function FacilModal() {
    const dispatch = useAppDispatch()
    const facilToggled = useAppSelector(state => state.facilModalToggle.value)
    const activeFacil = useAppSelector(state => state.activeFacil)

  return (
    <AnimatePresence>
        {facilToggled && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .3, ease: "linear"}} className={style.tip__modal}>
                <motion.div initial={{y: "100%"}} animate={{y: "0%"}} exit={{y: "100%"}} transition={{duration: .3, damping: 8, bounce: .5, type: "spring" }} className={style.tip__modalContainer}>
                    <div className={style.tip__modal__close} onClick={() => dispatch(toggleFacilModal())}><AiOutlineClose size={30} /></div>
                    <div className={style.facil__modalContent}>
                        <>
                            <h2>{activeFacil.name}</h2>
                            {activeFacil.descs.map((desc, index) => (
                                <div key={index}>
                                    <h3>{desc.name}</h3>
                                    <p>{desc.description}</p>
                                </div>
                            ))}
                        </>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
