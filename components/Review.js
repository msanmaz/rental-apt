import React from 'react'
const reviews = [
    {
      text: `We absolutely loved to stay at Ivana's place. She's an extremely welcoming host and takes care of every detail - clear communication, a spotless and well-equipped apartment, a home-made cake to welcome the guests and much more! We could not have had a better time in Valtellina and will surely stay with Ivana again on our next visit to Morbegno. Highly recommended!`,
      author: 'Stefan',
      date: 'Nov 2021',
    },
    {
      text: `Ivana was a very caring and sweet host. The hospitality goes beyond imagination. She welcomed us with a fabulous cake, a couple of beers, sodas, milk, butter and a bottle of local red wine. The place is highly recommended.`,
      author: 'Tomáš',
      date: 'Oct 2021',
    },
    {
      text: `Fantastic accommodation, highly recommended for a quiet stay surrounded by stunning views with plenty of active options for walking and cycling. Ivana is a wonderful host!`,
      author: 'Ross',
      date: 'Oct 2021',
    },
  ]

const Review = () => {
  return (
    <>
    <div className='max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8'>
  <div className='mt-10 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
    <div>
      <div className=''>
        <h1 className='text-2xl font-extrabold tracking-tight  sm:text-3xl mb-10'>
          Details about the house
        </h1>

        <p className='text-xl '>
          The house is an old building recently renovated. It has two
          floors. On the ground floor there is a large terrace with
          coffee table, cozy living room with kitchenette, pellet stove
          and fireplace. On the upper floor which is accessed with an
          internal staircase are the double bedroom, and through the
          terrace you can access the second bedroom, containing two
          single beds, and the bathroom with bathtub (and shower
          curtain). It is possible to use the washing machine.
          <br />
          <br />
          Lots of local restaurants will serve the typical and
          traditional foods and wines this valley is known for.
          <br />
          <br />
          For the more adventurous, nearby you will find the famous Fly
          Emotion, fly across the valley connected to a steel cable!
        </p>
      </div>
    </div>
  </div>

  <div className='mt-10'>
    <p className='text-2xl font-bold'>Reviews</p>
    <div className='mt-6'>
      {reviews.map((review, index) => (
        <div className='mb-5' key={index}>
          <div>{review.text}</div>
          <div className='mt-2 text-gray-300'>
            {review.author}, {review.date}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    
    <Around/>
    </>
  )
}

export default Review

const destinations = [
  {
    name: 'Lake Como',
    description: '26km, 32 minutes by car',
  },
  {
    name: 'Milano',
    description: '124km, 2h by car or 1h 40m by train',
  },
  {
    name: 'Passo San Marco',
    description: '17km, 28 minutes by car',
  },
  {
    name: 'Passo Spluga',
    description: '71km, 1h 37min by car',
  },
  {
    name: 'St Moritz',
    description: '92km, 1h 52m by car',
  },
  {
    name: 'Passo Bernina',
    description: '92km, 1hr 51 minutes by car',
  },
  {
    name: 'Bormio',
    description: '97km, 1h 43 min by car',
  },
  {
    name: 'Livigno',
    description: '133km, 2h 35min by car',
  },
]

const Around = () => {
  return(
    <div className='relative  py-16 sm:py-24 lg:py-32'>
  <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
    <h2 className='text-base font-semibold tracking-wider uppercase'>
      The surroundings
    </h2>
    <p className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
      Popular destinations for your holidays
    </p>
    <p className='mt-5 max-w-prose mx-auto text-xl text-gray-300'>
      From challenging mountain trails to beautiful alpine lakes to
      cities, lots of destinations in reach for a day trip
    </p>
    <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {destinations.map((destination, index) => (
          <div className='pt-6' key={index}>
            <div className='  rounded-lg px-6 pb-8'>
              <div className='-mt-6'>
                <h3 className='mt-8 text-lg font-medium  tracking-tight text-white'>
                  {destination.name}
                </h3>
                <p className='mt-5 text-base text-gray-200'>
                  {destination.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  )
}