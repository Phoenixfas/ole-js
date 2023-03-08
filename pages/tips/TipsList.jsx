import { useState } from 'react'
import style from "@/styles/Tips.module.css"
import { facts, facilities } from '@/data/tips'
import { useAppDispatch } from '@/redux/hooks'
import { changeActiveTip } from '@/redux/slices/activeTipSlice'
import { toggleTipModal } from '@/redux/slices/tipModalToggleSlice'
import { toggleFacilModal } from '@/redux/slices/facilModalToggleSlice'
import { changeActiveFacil } from '@/redux/slices/activeFacilSlice'
import { motion, AnimatePresence } from 'framer-motion'

export default function TipsList() {
    const dispatch = useAppDispatch()
    const [activeMenu, setActiveMenu] = useState("about")
  return (
    <div className={style.tipslist}>
        <div className={style.tipslist__menu}>
            <div className={`${style.tipslist__menu__item} ${activeMenu === "about" && style.active__menu}`} onClick={() => setActiveMenu("about")}>ABOUT</div>
            <div className={`${style.tipslist__menu__item} ${activeMenu === "fac" && style.active__menu_fac}`} onClick={() => setActiveMenu("fac")}>FACILITIES</div>
        </div>
        <AnimatePresence>
            {activeMenu === "about" && (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className={style.tipslist__cardsContainer}>
                    {facts.map((fact, index) => (
                        <div key={index} className={style.tipslist__card} onClick={() => {
                            dispatch(changeActiveTip(fact))
                            dispatch(toggleTipModal())
                        }}>
                            <div className={style.tipslist__card__content}>
                                <h1>{fact.name}</h1>
                                <p>{fact.description.substring(0, 140)}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
            {activeMenu === "fac" && (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className={`${style.tipslist__cardsContainer} ${style.black}`}>
                    {facilities.map((facil, index) => (
                        <div key={index} className={style.tipslist__card} onClick={() => {
                            dispatch(changeActiveFacil(facil))
                            dispatch(toggleFacilModal())
                        }}>
                            <div className={`${style.tipslist__card__content} ${style.facillist_content}`}>
                                <h1>{facil.name}</h1>
                                <p>{facil.descs[0].description.substring(0, 140)}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}
