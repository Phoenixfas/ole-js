import React from 'react'
import style from '../styles/Home.module.css'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { toggleTipModal } from '@/redux/slices/tipModalToggleSlice'

export default function TipModal() {
    const dispatch = useAppDispatch()
    const tipToggled = useAppSelector(state => state.tipModalToggle.value)
    const activeTip = useAppSelector(state => state.activeTip)

  return (
    <AnimatePresence>
        {tipToggled && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .3, ease: "linear"}} className={style.tip__modal}>
                <motion.div initial={{y: "100%"}} animate={{y: "0%"}} exit={{y: "100%"}} transition={{duration: .3, damping: 8, bounce: .5, type: "spring" }} className={style.tip__modalContainer}>
                    <div className={style.tip__modal__close} onClick={() => dispatch(toggleTipModal())}><AiOutlineClose size={30} /></div>
                    <div className={style.tip__modalContent}>
                        <h2>{activeTip.name}</h2>
                        <p>{activeTip.description}</p>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}
