import React from 'react'
import prisma from 'lib/prisma'
import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps(context) {
    const data = await prisma.booking.findMany({
        where:{
            sessionId:{
                contains: context.params.id
            }
        },
    })
    const res = JSON.parse(JSON.stringify(data))


    return {
      props: {
        res
      },
    }
  }

const Success = ({res}) => {
    console.log(res)
  return (
    <div>
    <Head>
      <title>Rental Apartment</title>
      <meta name='description' content='Rental Apartment Website' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='relative overflow-hidden'>
      <div className='relative'>
        <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100'></div>
        <div className=''>
          <div className='relative shadow-xl  sm:overflow-hidden'>
            <div className='absolute inset-0'>
              <img className='h-full w-full object-cover' src='https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
              <div className='absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 mix-blend-multiply'></div>
            </div>
            <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  bg-gray-800/80'>
              <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                <span className='block text-white'>Successfully booked!</span>
              </h1>
              <h2 className='text-center text-2xl font-normal tracking-tight mt-10'>
                <span className='block text-gray-300'>
               from {res[0].from.slice(0,10)} to {res[0].to.slice(0,10)}
                </span>
              </h2>
              <h2 className='text-center text-2xl font-normal tracking-tight mt-10'>
                <span className='block text-gray-300'>
                  You will receive an email with all the details
                </span>
              </h2>
              <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5'>
                  <Link href={`/`}>
                    <a className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-indigo-50 sm:px-8'>
                      ⬅ Back to the house details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='w-full bg-gray-400 md:px-[8rem]'>
    <h2 className="text-base-semi">Order Summary</h2>
      <div className="text-small-regular text-gray-700 my-2">
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Subtotal</span>
          <span>{res[0].price}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
            <span>Taxes</span>
            <span></span>
          </div>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Total</span>
          <span>{(res[0].price)}</span>
        </div>
      </div>


    </div>

  </div>
  )
}

export default Success