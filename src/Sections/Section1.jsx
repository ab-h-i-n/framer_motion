import React from 'react'
import ImageGallery from '../Components/ImageGallery'
import Heading from '../Components/Heading'

const Section1 = () => {
  return (
    <div className='h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center '>

        <Heading title={'Cars'}/>

        <ImageGallery things={'car'} />

    </div>
  )
}

export default Section1