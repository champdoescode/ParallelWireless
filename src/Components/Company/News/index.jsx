import React from 'react'
import WhoWeAreGrid from '../WhoWeAre/WhoWeAreGrid'
import Footer from '../../Footer'
import ButtonHover from '../../ButtonHover'

const News = () => {
  return (
    <>
        <div className='newsBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>News</div>
            <div className='flex justify-center border py-8'>
                <div className='w-9/12'>
                    <div className='text-xl text-center mt-8'>At Parallel Wireless, we try to be as active as possible within the markets we service. In doing so, we find ourselves attending many events, conferences, and tradeshows in the wireless, telecom, and Public Sector industries. If you would like to hear what we have presented at previous events, or to see what noise we’ve been making in industry publications, visit our <span><ButtonHover heading='News'/></span> page to learn more about our Open RAN solutions and deployments. If you would like to see what future events we will be attending, or to setup a meeting with us at one of these upcoming events, visit our <span><ButtonHover heading='Events' /></span> page.</div>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center bg-gray-100 py-16'>
            <div className='w-11/12'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
                    <div className='grid-items'>
                        <div className='relative w-full overflow-hidden bg-cover bg-no-repeat z-0 '>
                            
                            <img className='w-full transition duration-300 ease-in-out hover:scale-110' src="https://www.parallelwireless.com/wp-content/uploads/in-the-news.jpg" alt="" />
                            
                            <div className='flex absolute z-10 bottom-0 mb-8'>
                                <div className='px-8 py-2 text-3xl text-white bg-orange-600'>In The News</div>
                            </div>
                        </div>
                        <div className='text-xl my-4'>See what we’ve been up to.</div>
                    </div>
                    <div className='grid-items'>
                        <div className='relative w-full overflow-hidden bg-cover bg-no-repeat z-0 '>
                            
                            <img className='w-full transition duration-300 ease-in-out hover:scale-110' src="https://www.parallelwireless.com/wp-content/uploads/upcomingevent-e1620925173854.png" alt="" />
                            
                            <div className='flex absolute z-10 bottom-0 mb-8'>
                                <div className='px-8 py-2 text-3xl text-white bg-orange-600'>Hear Us Speak</div>
                            </div>
                        </div>
                        <div className='text-xl my-4'>See what events we’ll be attending.</div>
                    </div>
                    <div className='grid-items'>
                        <div className='relative w-full overflow-hidden bg-cover bg-no-repeat z-0 '>
                            
                            <img className='w-full transition duration-300 ease-in-out hover:scale-110' src="https://www.parallelwireless.com/wp-content/uploads/press-releases-sm.jpg" alt="" />
                            
                            <div className='flex absolute z-10 bottom-0 mb-8'>
                                <div className='px-8 py-2 text-3xl text-white bg-orange-600'>Press Releases</div>
                            </div>
                        </div>
                        <div className='text-xl my-4'>Click here to read our announcements.</div>
                    </div>
                    <div className='grid-items'>
                        <div className='relative w-full overflow-hidden bg-cover bg-no-repeat z-0 '>
                            
                            <img className='w-full transition duration-300 ease-in-out hover:scale-110' src="https://www.parallelwireless.com/wp-content/uploads/ourawards.png" alt="" />
                            
                            <div className='flex absolute z-10 bottom-0 mb-8'>
                                <div className='px-8 py-2 text-3xl text-white bg-orange-600'>Awards</div>
                            </div>
                        </div>
                        <div className='text-xl my-4'>See what awards we’ve been nominated for.</div>
                    </div>

                </div>
            </div>

        </div>
        <Footer/>
        
        
        
    </>
  )
}

export default News