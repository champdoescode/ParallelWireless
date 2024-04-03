import React from 'react'
import LeardershipFeature from '../LeadershipFeature'

const Leardership = ({features}) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-11/12'>
            
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-16 mt-16'>
                {
                    features.map(feature => <LeardershipFeature {...feature} key={feature.heading} />)
                }

            </div>
        </div>

    </div>
  )
}

export default Leardership