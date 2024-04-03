import React from 'react'

const Vision = () => {
  return (
    <>
        <div className='bg-white shadow-2xl rounded-xl mb-16'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16'>
                <div className='grid-items p-8'>
                    <div className='text-orange-600 text-3xl'>OUR VISION</div>
                    <div className='text-zinc-700 text-xl my-4'>To reimagine the wireless network so all people can be connected whenever, wherever, and however they choose.</div>
                </div>
                <div className='grid-items p-9'>
                    <img src="https://www.parallelwireless.com/wp-content/uploads/ceros/mission-vision-and-values-webpage/media/0c49d333e828f3ba5609849300a538d1/values-webpage-image-copy-full.jpg" alt="" />

                </div>

            </div>
        </div>
    </>
  )
}

export default Vision