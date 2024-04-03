import React from 'react'
import LeardershipFeature from '../LeadershipFeature'

const Awards = ({awards}) => {
  return (
    <div className='w-full flex justify-center bg-gray-100'>
        <div className='w-11/12'>
            
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-16 mt-16'>
                {
                    awards.map(feature => <LeardershipFeature {...feature} key={feature.heading} />)
                }

            </div>
        </div>

    </div>
  )
}

export default Awards