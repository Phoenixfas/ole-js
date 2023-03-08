import style from '@/styles/About.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className={style.about}>
        <div className={style.about__logo}>
            <Image src="/images/logo/logo_text_light.png" alt="One Love Ethiopia Tours" width={500} height={500} />
        </div>
        <div className={style.about__desc}>
            <p>One Love Ethiopia Tours and Car Rental is a reputable travel and transportation company based in Addis Ababa, Ethiopia. Established in 2010, the company has been providing exceptional services to tourists and business travelers from all over the world.</p>
            <p>One Love Ethiopia Tours and Car Rental has a team of experienced and knowledgeable drivers and tour guides who are dedicated to making your travel experience enjoyable and memorable. Our tour packages cover the best tourist destinations in Ethiopia, including historical sites, natural attractions, and cultural experiences.</p>
            <p>We take pride in providing personalized services that cater to the unique needs and preferences of our clients. We offer flexible tour packages and customized itineraries to ensure that you get the most out of your travel experience. Our customer support team is available 24/7 to assist you with any questions or concerns you may have.</p>
            <p>At One Love Ethiopia Tours and Car Rental, we are committed to promoting responsible tourism practices and supporting local communities. We work with local businesses and communities to provide sustainable tourism solutions that benefit everyone involved.</p>
            <p>We are reliable and trustworthy company that offers top-quality travel and transportation services in Ethiopia. Whether you are a tourist or a business traveler, we are committed to providing you with a memorable and enjoyable experience that will exceed your expectations.</p>
        </div>
        <div className={style.about__staff}>
            <div className={style.about__staffImg}>
                <Image src="/images/about/abreham.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
            </div>
            <div className={style.about__staffDesc}>
                <p><span>Abreham Yohannes</span> is a manager and guide with over 10 years of experience in the tourism sector, following his attendance at high school in Debrezeyit. In 2008, he to become a guide and has been guiding ever since.</p>
                <p>During a trip abroad, he noticed that Ethiopia was largely misunderstood, with most people associating the country with the famine of 1984-1985. Inspired by this observation, he embarked on a project that would eventually become &quot;One Love Ethiopia Tours and Car Rental&quot;. His aim was to promote cultural exchange and to improve the living standards of local communities through sustainable tourism.</p>
                <p>One love Ethiopia Tours team of dedicated professionals have created unique immersion tours, designed to provide travelers with an authentic experience while also contributing to the local economy. Their enthusiastic approach to sustainable tourism has helped to change the perception of Ethiopia and has inspired others to follow in their footsteps.</p>
                <p>As the Ethiopian proverb goes, &quot;little by little, the egg walks on both legs.&quot; One love Ethiopia tours team are making a positive impact on their community and are leading the way in sustainable tourism in Ethiopia.</p>
            </div>
        </div>
        <div className={style.about__staff}>
            <div className={style.about__staffImg}>
                <Image src="/images/about/ras_abye.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
            </div>
            <div className={style.about__staffDesc}>
                <p>Talented and enthusiastic, <span>Ras Abye</span> arranges everything involved in documentary film production, from pre-production and scheduling through editing and marketing.</p>
                <p>From location scouting through to securing crews and logistics,  Ras Abye has been the driving force of various documentary films thanks to experience, local knowledge and strong connections with local communities all over Ethiopia. His knowledge and familiarities with local communities enables him to connect with the people and  overcome any type of challenge.</p>
                <p>As a Fixer , Ras Abye and his team handle all the administrative work with the authorities when it comes to obtaining an Ethiopian Film permit.</p>
                <p>After years of working in all parts of Ethiopia as Tour Leader and Fixer, Ras Abye has established strong working relationships with crews working on the field. This include directors, camera operators, sound mixers, drivers, cooks and many more. Ras Abye can put together a full crew that is just right for the film project. Ras Abye has an eye for authenticity during casting and identifies and source the right characters for the production.</p>
                <p>By combining his ground knowledge with office support, Ras Abye is able to ensure that every element of production from pre-production planning to post-production output is completed on time to budget as planned</p>
            </div>
        </div>

        <div className={style.about__staff}>
            <div className={style.staffImgHolder}>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/nebiyat_yohannes.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Nebiyat Yohannes</span></p>
                    <p>Reservation</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/kokeb_fasika.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Kokeb Fasika</span></p>
                    <p>Finance head</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/miraf_tamrat.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Miraf Tamrat</span></p>
                    <p>Marketing head</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/kokeb_misiraq.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Kokeb Misiraq</span></p>
                    <p>Reception</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/amanuel_tadesa.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Amanuel Tadesa</span></p>
                    <p>Logistics</p>
                </div>
            </div>
        </div>

        <div className={style.about__staff}>
            <div className={style.staffImgHolder}>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/yared_amare.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Yared Amare</span></p>
                    <p>Driver</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/birhanu_getu.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Birhanu Getu</span></p>
                    <p>Driver</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/yared_tamirat.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Yared Tamirat</span></p>
                    <p>Driver</p>
                </div>
                <div className={style.about__staffContent}>
                    <div className={style.about__staffImg}>
                        <Image src="/images/about/abenezer_kasahun.jpg" alt="One Love Ethiopia Tours" width={500} height={500} />
                    </div>
                    <p><span>Abenezer Kasahun</span></p>
                    <p>Driver</p>
                </div>
            </div>
            <div className={style.about__staffDesc}>
                <p>The drivers at One Love Ethiopia Tours have extensive experience and possess the potential to be skilled and safe drivers when they drive with good technique.</p>
            </div>
        </div>

    </div>
  )
}
