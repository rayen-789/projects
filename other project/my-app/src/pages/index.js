import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
const Home = () => {
    const[isOpen,setIsOpen]=useState(false);
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen}  toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection/>

        </>
    )
}

export default Home
