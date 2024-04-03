import React from 'react'
import LeadersFeature from '../LeadersFeature'

const LeadersGrid = ({leaders}) => {
  return (
    <>
            <div className='gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 flex flex-wrap justify-center'>
                    {
                        leaders.map(feature => <LeadersFeature {...feature} key={feature.name} />)
                    }

                    
                </div>
    </>
  )
}

export default LeadersGrid