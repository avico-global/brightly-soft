import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Contact from '../../components/container/Contact/Contact'
import Container from '../../components/common/Container'
import Hero from '../../components/ui/Hero'


export default function connect() {
  const heroSection = (
    <Container className="relative z-10 h-full flex items-center justify-center ">
    <div className="flex flex-col items-center justify-center h-full w-full px-4 ">
        <h1 className="text-4xl md:text-6xl lg:text-[75px] lg:leading-[100px] font-bold text-white text-center drop-shadow-xl ">
            Contact
        </h1>
    </div>
</Container>
  )
  return (
    <div>
        <Navbar />
        <Hero section={heroSection} />
        <Contact/>
        <Footer />
    </div>
  )
}