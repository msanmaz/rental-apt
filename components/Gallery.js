import React from 'react'

const Gallery = () => {
    return (
        <div className='pt-6'>
            <div className='mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
                <div className='hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block'>
                    <img
                        src='https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
                        className='w-full h-full object-center object-cover'
                    />
                </div>
                <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
                    <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
                        <img
                            src='https://images.unsplash.com/photo-1549893072-4bc678117f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                            className='w-full h-full object-center object-cover'
                        />
                    </div>
                    <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
                        <img
                            src='https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                            className='w-full h-full object-center object-cover'
                        />
                    </div>
                </div>
                <div className='aspect-w-4 px-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4'>
                    <img
                        src='https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
                        className='w-full h-full object-center object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery