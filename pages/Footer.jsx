import Link from 'next/link'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { FaInstagram, FaTelegram, FaLinkedin, FaFacebook, FaTripadvisor } from 'react-icons/fa'
import { SiGmail } from "react-icons/si"
import Image from 'next/image'

export default function Footer() {
    const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)

  return (
    // <>
    //     {!initHeroToggle && (
            <div className='footer'>
                <div className="footer__menu">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/tours'}>Our Tour</Link>
                    <Link href={'/tips'}>Travel Tips</Link>
                    <Link href={'/services'}>Our Service</Link>
                    <Link href={'/about'}>About Us</Link>
                    <Link href={'/contact'}>Contact Us</Link>
                    <Link href={'/gallery'}>Gallery</Link>
                    <hr color='#ffffff88' />
                </div>
                <div className="footer__logo">
                    <Image src="/images/logo/logo_dark.png" alt="logo" width={500} height={500} />
                </div>
                <div className="footer__about">
                    One Love Ethiopia is a reputable tour and car rental company based in Ethiopia. With a focus on customer satisfaction, we offer a wide range of services including guided tours, airport transfers, and car rental services. We are committed to providing an authentic and memorable experience for all our clients.
                </div>
                <div className="footer__socials">
                    <Link target="_blank" href={"https://www.facebook.com/oneloveethiopiatours?mibextid=ZbWKwL"}>
                        <FaFacebook size={30} />
                    </Link>
                    <Link target="_blank" href={"https://instagram.com/one_love_ethiopian_tours_?igshid=ZDdkNTZiNTM="}>
                        <FaInstagram size={30} />
                    </Link>
                    <Link target="_blank" href={"https://t.me/oneloveethiopiatours"}>
                        <FaTelegram size={30} />
                    </Link>
                    <Link target="_blank" href={"https://www.linkedin.com/in/abreham-yohannes-mekonnen-338551254"}>
                        <FaLinkedin size={30} />
                    </Link>
                    <Link target="_blank" href={"mailto:Oneloveethiopia32@gmail.com"}>
                        <SiGmail size={30} />
                    </Link>
                    <Link target="_blank" href={"https://www.tripadvisor.com/Attraction_Review-g293791-d19933004-Reviews-One_love_Ethiopia_Tours_Car_Rent-Addis_Ababa.html"}>
                        <FaTripadvisor size={30} />
                    </Link>
                </div>
                <div className="footer__copy">
                    <span>&copy; 2023 - All rights reserved | Designed and developed by <Link target="_blank" href={"https://afriopia.com"}>Afriopia Unified Systems</Link></span>
                </div>
            </div>
    //     )}
    // </>
  )
}
