import Image from 'next/image'
import React from 'react'
import Container from '../../common/Container'
import FullContainer from '../../common/FullContainer'
import { Link } from 'react-scroll'
import { ArrowDown, ChevronRightIcon } from 'lucide-react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

const BrandService = () => {

    return (
        <>
            <div className="relative z-20">
                <Container className="py-10 ">
                    <div className='w-full h-full relative'>
                        <Image src="/st-images/brandbanner.png" alt="Hero" width={2400} height={2400} className='w-full h-full object-cover' />
                        <div className="p-8 w-full mt-[-90px] z-[9999] relative">
                            <div className=' p-10 bg-white rounded-t-lg shadow-lg'>

                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Brand Services</h2>
                                    <p className="text-primary font-medium">Business Strategy</p>
                                </div>

                                <div className="mb-6 space-y-3">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-gray-600 text-sm">
                                        Project Link: <span className="font-bold text-primary">Brightlylysoft.com</span>
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 max-w-lg">
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm mb-1">Date:</p>
                                        <p className="text-gray-600 text-sm">28 Aug 2016</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm mb-1">Client:</p>
                                        <p className="text-gray-600 text-sm">Alfred Norris</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm mb-1">Awards:</p>
                                        <p className="text-gray-600 text-sm">2021 Awwwards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default BrandService