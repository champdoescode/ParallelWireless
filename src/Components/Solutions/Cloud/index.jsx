import React from 'react'
import { ArrowDown, DownloadCloud } from 'react-feather'

const Cloud = () => {
  return (
    <div className='w-full flex justify-center shadow-2xl bg-gray-100 mt-16 mb-[2px] py-8'>
        <div className='w-11/12'>
            <div className='text-4xl text-gray-900 text-center'>Find out how we help our customers roll out services faster and reduce OPEX by visiting our resources page to download data sheets and solution overviews or watch customer videos or webinar recordings.</div>
            <div className='flex justify-center items-center mt-8'>
                <DownloadCloud size={56} color='#e85415'>
                    
                </DownloadCloud>
            </div>
        </div>

    </div>
  )
}

export default Cloud