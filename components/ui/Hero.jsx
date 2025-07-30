import Image from 'next/image'
import React from 'react'
import Container from '../common/Container'
import FullContainer from '../common/FullContainer'
import { ArrowDown, ChevronRightIcon } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const Hero = ({ section }) => {

    return (
        <>
            <FullContainer className={`h-screen max-h-[670px] w-full relative font-montserrat ${montserrat.className}`}>
                <Image src="/st-images/hero.jpeg" alt="Hero" width={2400} height={2400} className='w-full h-full z-0 object-cover absolute top-0 left-0' />
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/0 z-10 " />
                {section}
            </FullContainer>
        </>
    )
}

export default Hero