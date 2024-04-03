import React from 'react'
import MostRecentPostGrid from '../MostRecentPostGrid'

const MostRecentPost = ({details}) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-11/12'>
            <div className='text-5xl font-bold text-center my-8'>Most Recent Posts</div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                {
                    details.map( feature => <MostRecentPostGrid {...feature} key={feature.title} />)
                }
            </div>
        </div>
    </div>
  )
}

export default MostRecentPost