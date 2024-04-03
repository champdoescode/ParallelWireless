import React from 'react'
import OurQualitiesFeature from '../OurQualitiesFeature'

const CareerOptions = ({options}) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-11/12'>
            
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-16'>
                {
                    options.map(feature => <OurQualitiesFeature {...feature} key={feature.heading} />)
                }

            </div>
        </div>

    </div>
  )
}

export default CareerOptions