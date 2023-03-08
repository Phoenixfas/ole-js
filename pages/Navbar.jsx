import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAppSelector } from '@/redux/hooks'
import { motion } from 'framer-motion'
import tours from '@/data/tour'

export default function Navbar() {
    const router = useRouter()
    const [searchActive, setSearchActive] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [filteredData, setFilteredData] = useState([])

    const t = tours

    const onChange = (e) => {
        const keyword = e.target.value;
        const newFilter = t.filter((tour) => {
          return tour.name.toLowerCase().includes(keyword.toLowerCase())
        })
        if(keyword === "") {
          setFilteredData([])
          setSearchText("")
        }

        setFilteredData(t.filter((tour) => tour.name.toLowerCase().includes(keyword.toLowerCase())))
        setSearchText(keyword)
    }
    const checkEmpty = (e) => {
        if(e.target.value === "") {
            setFilteredData([])
            setSearchText("")
        }
    }
    const clearSearch = () => {
        setFilteredData([])
        setSearchText("")
      }

    const initHeroToggle = useAppSelector(state => state.initHeroToggle.value)
    const headerColorToggled = useAppSelector(state => state.headerColorToggle.value)


  return (
    // <>
    //     {!initHeroToggle && (
            <motion.div initial={{y: "-100%"}} animate={{y: "0%"}} transition={{duration: .3, delay: .3}} className={'navbar'}>
                <div className={'navbar_logo'}>
                    <Image src={headerColorToggled ? "/images/logo/logo_light.png" : "/images/logo/logo_dark.png"} alt="logo" width={100} height={100} />
                </div>
                <div className={`navbar_links ${!headerColorToggled && "navbar_links_black"}`}>
                    <Link href="/">Home</Link>
                    <Link href="/tours">Our Tour</Link>
                    <Link href="/tips">Tips</Link>
                    <Link href="/services">Our Service</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/gallery">Gallery</Link>
                </div>
                <div className={'navbar_search'}>
                    <div className={`${'searchInput'} ${searchActive && 'searchActive'} ${!headerColorToggled && 'searchActive__black'}`}>
                        <input className='min-w-[250px] outline-none border-none rounded-full placeholder:text-sm px-3 py-2 text-black text-sm' placeholder='Search here' type="text" name='search' value={searchText} onChange={onChange} onKeyDown={checkEmpty} />
                        {filteredData.length != 0 && (
                            <div className="search-results" >
                            {t && filteredData.slice(0, 10).map((tour, index) => (
                                <div className='search-item' key={index}>
                                    <p id='blog-search' onClick={() => {
                                        clearSearch()
                                        router.push(`/tours/${tour.id}`)
                                        }} 
                                    >
                                        {tour.name.charAt(0).toUpperCase() + tour.name.slice(1)}
                                    </p>
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                    <div onClick={() => setSearchActive(!searchActive)}>
                        <FaSearch size={25} style={{cursor: "pointer"}} color={headerColorToggled ? "#fff" : "#000"} />
                    </div>
                </div>
            </motion.div>
    //     )}
    // </>
  )
}
