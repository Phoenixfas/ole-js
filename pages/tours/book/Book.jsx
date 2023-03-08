import style from '@/styles/Tours.module.css'
import { useState } from "react"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Image from "next/image"
import tours from "@/data/tour"

export default function Book() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tour, setTour] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")

    const [done, setDone] = useState(false)
    const [error, setError] = useState("")


    const onSubmit = (e) => {
        // e.preventDefault()

        if(!name || !email || !tour || !phone) {
            setError("Please fill all fields")
            setTimeout(() => setError(""), 5000)
            return
        }

    }
    return (
        <>
            <div className={style.tour}>
                <ParallaxProvider>
                    <div className={style.tour__background}>
                        <Parallax speed={-50} className={style.tour__img}>
                            <Image src={"/images/tours/simien.jpg"} alt='simien mt' fill />
                        </Parallax>
                    </div>
                </ParallaxProvider>
                <div className={style.book__container}>
                    <div className={style.message__container}>
                        <div className={style.message}>
                            <form className={style.message__form} onSubmit={onSubmit} action="mailto:info@oneloveethiopiatours.com" method="post" encType="text/plain">
                                {error && (
                                    <p style={{textAlign: "center", padding: "3px", borderRadius: "3px", backgroundColor: "orangered", color: "#fff"}}>{error}</p>
                                )}
                                <label>Name*</label>
                                <input required type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                <label>Email*</label>
                                <input required type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Phone*</label>
                                <input type="tel" name="phone" id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <label>Tour</label>
                                <select required name="tour" id="tour" value={tour} onChange={(e) => setTour(e.target.value)} >
                                    {tours.map((tour) => (
                                        <option key={tour.id} value={tour.name}>{tour.name}</option>
                                    ))}
                                </select>
                                <label>Additional Message</label>
                                <textarea placeholder="(optional)" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <button type="submit">Book</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
