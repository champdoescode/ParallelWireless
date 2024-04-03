import React from 'react'
import MostRecentPostGrid from '../MostRecentPostGrid'
import OtherBlogsGrid from '../OtherBlogsGrid'
import { ArrowRight, Search } from 'react-feather'

const OtherBlogs = ({otherdetails}) => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-11/12'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                <div className='grid-items col-span-2'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {
                            otherdetails.map(feature => <OtherBlogsGrid {...feature} key={feature.title} />)
                        }

                    </div>
                    
                

                </div>
                <div className='grid-items'>
                    <div className='text-4xl text-gray-600 my-4'>Search the Blog</div>
                    <div className='relative'>
                        <input className='rounded bg-gray-200 w-full h-16 text-2xl pl-4' type="text" placeholder='enter search term' />
                        <div className='absolute top-0 right-0 z-10  bg-black h-full w-16  flex justify-center items-center'>
                            <ArrowRight size={32} color='gray'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherBlogs