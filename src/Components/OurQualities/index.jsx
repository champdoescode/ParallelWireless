import React from 'react'
import OurQualitiesFeature from '../OurQualitiesFeature'

const OurQualities = ({qualities}) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-11/12'>
            
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-16 mt-16'>
                {
                    qualities.map(feature => <OurQualitiesFeature {...feature} key={feature.heading} />)
                }

            </div>
        </div>

    </div>
  )
}

export default OurQualities