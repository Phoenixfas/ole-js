import style from '@/styles/Tours.module.css'
import Image from 'next/image'
import tours from '@/data/tour'
import Link from 'next/link'

export default function Featured() {
    const t = tours.slice(3, 6)
  return (
    <div className={style.featured}>
        <h2>Featured Tours</h2>
        <div className={style.featured__container}>
            {t.map((tour, i) => (
                <Link href={`/tours/${tour.id}`} key={i} className={style.featured__card}>
                    <Image src={tour.image} alt={tour.name} fill />
                    <p>{tour.mainName}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}
