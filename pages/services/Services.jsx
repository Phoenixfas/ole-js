import style from "@/styles/About.module.css"
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"

export default function Services() {
  return (
    <div className={style.about}>
        {/* <div className={style.about__logo}>
            <Image src="/images/logo/logo_text_light.png" alt="One Love Ethiopia Tours" width={500} height={500} />
        </div> */}
        {/* <div className={style.about__desc}>
            <p>Our primary focus is on tourism and transportation services, including car rentals, airport transfers, and tour packages. We have a wide range of well-maintained and comfortable vehicles, including sedans, SUVs, vans, and buses that are perfect for any type of travel, from short trips around the city to longer excursions across the country.</p>
        </div> */}
        <div className={style.about__services}>
            <div className={style.serviceList}>
                <h2>TOURS</h2>
                <ul>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Package tours for groups and individuals.</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Thematic tours (immersion, family, photo, gastronomy, bird watching, trail, adventure, etc.)</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Tailor-made tours.</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Excursions</span></div></li>
                </ul>
            </div>
            <div className={style.serviceList}>
                <h2>GUIDING & LOGISTICS SERVICES</h2>
                <ul>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Guiding service (speaking different languages).</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Expert support (archaeologist, art, ornithologist, etc.)</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Logistical support for documentary filming & lectures.</span></div></li>
                </ul>
            </div>
            <div className={style.serviceList}>
                <h2>CAR & CAMPING EQUIPMENT RENTAL</h2>
                <ul>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Vehicle rental with driver (4WD, mini-buses, buses).</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Rental of camping equipment</span></div></li>
                </ul>
            </div>
            <div className={style.serviceList}>
                <h2>BOOKING SERVICES</h2>
                <ul>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Flight tickets reservations (for internal flights).</span></div></li>
                    <li><div><FaCheckCircle color="white" size={25} /></div> <div><span>Hotel booking.</span></div></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
