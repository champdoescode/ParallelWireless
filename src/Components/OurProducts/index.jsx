import React from 'react'
import OurProductFeature from '../OurProductFeature'

const OurProducts = ({products}) => {
  return (
    <div className='w-full flex justify-center mt-16 shadow-2xl'>
        <div className='w-11/12'>
            <div className='text-4xl text-center'>Our Products</div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-16 my-16'>
                {
                    products.map(feature => <OurProductFeature {...feature} key={feature.heading} />)
                }

            </div>
        </div>

    </div>
  )
}

export default OurProducts