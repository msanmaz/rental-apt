import Head from 'next/head'
import Gallery from 'components/Gallery'
import Hero from 'components/Hero'
import Review from 'components/Review'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rental Apartment</title>
        <meta name='description' content='Rental Apartment Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero desc={true}/>
      <Gallery/>
      <Review/>
  
    </div>
  )
}