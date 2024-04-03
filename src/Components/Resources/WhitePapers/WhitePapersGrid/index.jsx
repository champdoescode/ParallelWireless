import React from 'react'

const WhitePapersGrid = (props) => {
  return (
    <>
    <div className='grid-items'>
            <div class="">
                <div class="group relative block overflow-hidden  transition-all duration-500">
                    <div class="lightbox transition-all duration-500 tobii-zoom border-b-[12px] border-orange-600 flex " title="">
                        <div className='py-20 px-4 h-64 w-72 text-center flex justify-center items-center bg-gray-200 flex flex-col'>
                        <div className='text-2xl text-gray-700'>{props.heading}</div>
                        <div className='text-gray-600 text-lg'>PDF</div>
                        </div>
                    </div>
                    <div class="absolute -bottom-full h-full group-hover:bottom-0 right-0 left-0 bottom-0 transition-all duration-500 bg-white dark:bg-orange-600 p-4 shadow dark:shadow-gray-700">
                        <div className='flex justify-center items-center h-full'>
                            <div>
                                <button className='font-bold text-white text-xl tracking-widest'>Download</button>
                            </div>
                            

                        </div>
                        
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default WhitePapersGrid