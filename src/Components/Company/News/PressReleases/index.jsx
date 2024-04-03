import React from 'react'
import ButtonDefault from '../../../ButtonDefault'
import Footer from '../../../Footer'
import ButtonColorChange from '../../../ButtonColorChange'
import ButtonHover from '../../../ButtonHover'
import PressReleasesGrid from './PressReleasesGrid'

const PressReleases = () => {
  return (
    <>
        
            <div className=' w-full'>
            

                <div className='bg-slate-200/70 p-8 '>
                    <div className='text-center text-5xl'>Press Releases</div>
                    <div className='flex  justify-center my-2'>
                        <div className='text-xl font-bold mr-2'>Contact Public Relations: </div>
                        <div> <ButtonHover heading=' PR@parallelwireless.com' /> </div>

                    </div>
                </div>
                
            </div>
            <div className='gap-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-16'>
                <div className='grid-items'>
                    <img src="https://www.parallelwireless.com/wp-content/uploads/Pavo-Group.jpeg" alt="" />
                </div>
                <div className='grid-items'>
                    <PressReleasesGrid 
                        date="Feb 27, 2024"
                        title="Pavo Group and Parallel Wireless Embark On a Strategic Collaboration to Deliver Next-Generation Mobile Telecommunication Equipment Manufacturing"
                        description="Nashua, NH, FEBRUARY 27, 2024– Parallel Wireless, a leading pioneer of Open RAN hardware-agnostic and energy efficient…"
                    />
                </div>

            </div>
            <div className='w-full flex justify-center bg-gray-100'>
                <div className='w-11/12'>
                    <div className='flex items-center p-6'>
                        <div className='text-xl text-gray-700 mr-8'>Sort By</div>
                        <div>
                            <input className='h-12 w-72 border outline-none focus:border-orange-400 pl-6 text-xl' placeholder='Year' type="text" />
                        </div>
                    </div>



                </div>

            </div>
            <div className='w-full flex justify-center'>
                <div className='w-11/12'>
                <PressReleasesGrid 
                        date="Feb 27, 2024"
                        title="Pavo Group and Parallel Wireless Embark On a Strategic Collaboration to Deliver Next-Generation Mobile Telecommunication Equipment Manufacturing"
                        description="Nashua, NH, FEBRUARY 27, 2024– Parallel Wireless, a leading pioneer of Open RAN hardware-agnostic and energy efficient…"
                    />
                <PressReleasesGrid 
                        date="Feb 27, 2024"
                        title="Pavo Group and Parallel Wireless Embark On a Strategic Collaboration to Deliver Next-Generation Mobile Telecommunication Equipment Manufacturing"
                        description="Nashua, NH, FEBRUARY 27, 2024– Parallel Wireless, a leading pioneer of Open RAN hardware-agnostic and energy efficient…"
                    />
                <PressReleasesGrid 
                        date="Feb 27, 2024"
                        title="Pavo Group and Parallel Wireless Embark On a Strategic Collaboration to Deliver Next-Generation Mobile Telecommunication Equipment Manufacturing"
                        description="Nashua, NH, FEBRUARY 27, 2024– Parallel Wireless, a leading pioneer of Open RAN hardware-agnostic and energy efficient…"
                    />
                <PressReleasesGrid 
                        date="Feb 27, 2024"
                        title="Pavo Group and Parallel Wireless Embark On a Strategic Collaboration to Deliver Next-Generation Mobile Telecommunication Equipment Manufacturing"
                        description="Nashua, NH, FEBRUARY 27, 2024– Parallel Wireless, a leading pioneer of Open RAN hardware-agnostic and energy efficient…"
                    />



                </div>

            </div>
            
            <Footer/>
    </>
  )
}

export default PressReleases