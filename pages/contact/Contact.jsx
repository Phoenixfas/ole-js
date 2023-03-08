import { useState } from "react"
import style from '@/styles/Contact.module.css'
import Link from 'next/link'
import { SiGmail } from "react-icons/si"
import { MdLocationPin, MdCall } from  "react-icons/md"


export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [done, setDone] = useState(false)
    const [error, setError] = useState("")


    const onSubmit = (e) => {
        // e.preventDefault()

        if(!name || !email || !subject || !message) {
            setError("Please fill all fields")
            setTimeout(() => setError(""), 5000)
            return
        }

    }
  return (
    <div className={style.contact}>
        <div className={style.mapHolder}>
            <div className={style.mapouter}>
                <div className={style.gmap_canvas}>
                    <iframe
                        className={style.gmap_iframe}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?q=2Q3H+PQF%20One%20Love%20Ethiopia%20Tours%20&%20Car%20Rent.,%20Abay%20Insurance%20SC.%20Head%20Office,%20306%203rd%20floor,%20Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                </div>
            </div>
        </div>


        <div className={style.contact__cardsContainer}>
            <Link href={"mailto:info@oneloveethiopiatours.com"}>
                <div className={style.contact__card}>
                <div className={style.contact__icon}>
                    <SiGmail className={style.team__icon} size={50} />
                </div>
                <h3>Mail Here</h3>
                <p>info@oneloveethiopiatours.com</p>
                <p>Oneloveethiopia32@gmail.com</p>
                <p>Selam@oneloveethiopiatours.com</p>
                </div>
            </Link>
            <Link
                href={
                "https://maps.app.goo.gl/pN1aFDD3HhC2eDdu8"
                }
            >
                <div className={style.contact__card}>
                <div className={style.contact__icon}>
                    <MdLocationPin className={style.team__icon} size={50} />
                </div>
                <h3>Visit Here</h3>
                <p>
                    Atlas, Abay Insurance building, 3rd floor
                </p>
                </div>
            </Link>

            <Link href={"tel:+25191 122 3399"}>
                <div className={style.contact__card}>
                <div className={style.contact__icon}>
                    <MdCall className={style.team__icon} size={50} />
                </div>
                <h3>Call Here</h3>
                <p>+251-911-223-399</p>
                <p>+251-911-951-312</p>
                </div>
            </Link>
        </div>

        <div className={style.message__container}>
            <div className={style.message}>
                <form className={style.message__form} onSubmit={onSubmit} action="mailto:info@oneloveethiopiatours.com" method="post" encType="text/plain">
                    {error && (
                        <p style={{textAlign: "center", padding: "3px", borderRadius: "3px", backgroundColor: "orangered", color: "#fff"}}>{error}</p>
                    )}
                    <label>Name</label>
                    <input required type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input required type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Subject</label>
                    <input required type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <label>Message</label>
                    <textarea required name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}
