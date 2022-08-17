import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <>

            <div className='relative'>
                <div className='absolute inset-0'>
                    <img
                        className='h-full w-full object-cover'
                        src='/img/1.jpg'
                    />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  bg-gray-800/80'>
                    <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                        A Charming Old House
                        <span className='block text-gray-300'>on the Italian Alps</span>
                    </h1>
                    <p className='mt-6 max-w-2xl mx-auto text-center text-xl'>
                        House located in the hamlet of Valle di Morbegno, at 800 meters of
                        height, is 10 minutes from Morbegno. It can be reached by car and by
                        bus from Morbegno, with a stop near the house. Ideal for mountain
                        and animal lovers. Your furry friends are welcome. Equipped with
                        heating by pellet stove, it is also possible to light the large
                        fireplace.
                    </p>
                    <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                        <div className=''>
                            <Link href={`/calendar`}>
                                <a className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 sm:px-8'>
                                    See availability calendar and prices
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero