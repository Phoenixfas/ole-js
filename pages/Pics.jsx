import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { pics } from '@/data/pics'
import style from '../styles/Home.module.css'
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hooks'
import { togglePicModal } from '@/redux/slices/picModalToggleSlice'
import { changeActivePic } from '@/redux/slices/activePicSlice'
import Link from 'next/link'

export default function Pics() {
    const dispatch = useAppDispatch()

    const p1 = pics.slice(0, 3)
    const p2 = pics.slice(3, 6)
    const p3 = pics.slice(6, 9)

    const options = { delay: 10000 } // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
    // @ts-ignore
    const autoplay = Autoplay(options, autoplayRoot)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])


    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])
    
  return (
    <div className={style.pics}>
        <h1>memories captured by our customers</h1>
        <div ref={emblaRef} className={style.embla}>
            <div className={style.embla__container}>
                <div className={style.embla__slide}>
                    <div className={style.pics__container}>
                        {p1.map((pic, index) => (
                            <div key={index} className={style.pic_card} onClick={() => {
                                dispatch(togglePicModal())
                                dispatch(changeActivePic(pic))
                            }}>
                                <Image src={pic.image} alt={pic.location} width={500} height={500} />
                                <p>{pic.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.embla__slide}>
                    <div className={style.pics__container}>
                        {p2.map((pic, index) => (
                            <div key={index} className={style.pic_card} onClick={() => {
                                dispatch(togglePicModal())
                                dispatch(changeActivePic(pic))
                            }}>
                                <Image src={pic.image} alt={pic.location} width={500} height={500} />
                                <p>{pic.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.embla__slide}>
                    <div className={style.pics__container}>
                        {p3.map((pic, index) => (
                            <div key={index} className={style.pic_card} onClick={() => {
                                dispatch(togglePicModal())
                                dispatch(changeActivePic(pic))
                            }}>
                                <Image src={pic.image} alt={pic.location} width={500} height={500} />
                                <p>{pic.location}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className={style.pics__more}>
            <Link href="/gallery" className={style.pics__moreBtn}>more</Link>
        </div>
    </div>
  )
}
