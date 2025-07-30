import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

export default function Card() {
    const brands = [
        {
            name: 'Fashion',
            image: '/st-images/brands/fashion.webp',
            href: 'https://fashion.amplifytest1.top'
        },
        {
            name: 'Magzine',
            image: '/st-images/brands/magzine.webp',
            href: 'https://magzine.amplifytest1.top'
        },
        {
            name: 'BizzBlog',
            image: '/st-images/brands/bizzblog.webp',
            href: 'https://bizzblog.amplifytest1.top'
        },
        {
            name: 'Koga',
            image: '/st-images/brands/koga.webp',
            href: 'https://koga.amplifytest1.top'
        },
        {
            name: 'Isabelle Roche',
            image: '/st-images/brands/isabelleroche.webp',
            href: 'https://isabelle-roche.amplifytest1.top/'
        },
        {
            name: 'Newspaper Pro',
            image: '/st-images/brands/newspaperpro.webp',
            href: 'https://newspaperpro.amplifytest1.top'
        },
        {
            name: 'Local sanjose',
            image: '/st-images/brands/local.webp',
            href: 'https://local-sanjose.amplifytest1.top'
        },
        {
            name: 'Local HVC',
            image: '/st-images/brands/hvc.webp',
            href: 'https://httpsgithubcomavico-globalservice-next15-hvac.amplifytest1.top'
        },
        {
            name: 'Digital Spy',
            image: '/st-images/brands/digitalspy.webp',
            href: 'https://blog-next14temp-3.amplifytest1.top'
        },
        {
            name: 'Towing',
            image: '/st-images/brands/towing.webp',
            href: 'https://www.towing.com'
        },
        {
            name: 'Chronicle',
            image: '/st-images/brands/chronicle.webp',
            href: 'https://chronicle.amplifytest1.top'
        },
        {
            name: 'Gamer',
            image: '/st-images/brands/gammer.webp',
            href: 'https://katen.amplifytest1.top'
        },
        {
            name: 'Linx',
            image: '/st-images/brands/linxamplify.webp',
            href: 'https://linx.amplifytest1.top'
        },
        {
            name: 'App Recipe Picks',
            image: '/st-images/brands/apprecipepicks.webp',
            href: 'https://app.recipepicks.com/'
        },
        {
            name: 'Recipe Picks',
            image: '/st-images/brands/recipepicks.webp',
            href: 'https://www.recipepicks.com/'
        },
        {
            name: 'Site Builderz',
            image: '/st-images/brands/sitebuilderz.webp',
            href: 'https://sitebuilderz.com/'
        },
    ]

    return (
        <FullContainer className='py-12 lg:py-28 bg-white'>
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 md:gap-8 lg:gap-10">
                {brands.map((brand, index) => (
                    <div key={index} className="bg-white rounde shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {/* Top Section - Website Screenshot */}
                        <div className="w-full relative p-4">
                            <div className='w-full h-full relative aspect-[16/9] shadow-[0_0_10px_5px_rgba(0,0,0,0.2)] rounded-xs overflow-hidden'>
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Browser window overlay */}
                            
                        </div>

                        {/* Middle Section - Title and Description */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {brand.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Bottom Section - Live View Button */}
                        <div className="px-6 pb-6 w-full">
                            <Link
                                href={brand.href}
                                target="_blank"
                                className="inline-block w-fit text-center py-2 px-12 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-300"
                            >
                                Live view
                            </Link>
                        </div>
                    </div>
                ))}
            </Container>
        </FullContainer>
    )
}