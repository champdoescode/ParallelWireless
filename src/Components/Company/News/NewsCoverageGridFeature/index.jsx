import React from 'react'
import NewCoverageGrid from '../NewsCoverageGrid'

const NewsCoverageGridFeature = ({articles}) => {
  return (
    
    <div className='w-full flex justify-center'>
            <div className='w-11/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16'>
                    {
                        articles.map(feature => <NewCoverageGrid {...feature} key={feature.title} />)
                    }
                </div>
            </div>

        </div>
  )
}

export default NewsCoverageGridFeature