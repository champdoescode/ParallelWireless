import React from 'react'
import ButtonHover from '../../ButtonHover'
import WhoWeAreGrid from './WhoWeAreGrid'
import { PlayCircle } from 'react-feather'
import Footer from '../../Footer'

const WhoWeAre = () => {
    function PlayYt(){
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zO0utxX14Kg?si=iL0ZLvXkkPyDw23E/?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        document.getElementById('video').innerHTML;
    }
  return (
    <>

        <div className='whoweareBackground'>
        
        </div>
        <div className='-mt-28 w-full'>
        

            <div className='bg-slate-200/70 p-8 text-center text-5xl'>Who We Are</div>
            <div className='flex justify-center border py-8'>
                <div className='w-9/12'>
                <div className='text-4xl text-center'>We Are Reimaginers</div>
                    <div className='text-xl text-center mt-8'>Parallel Wireless is the only US company challenging the world’s legacy vendors with the industry’s only unified ALL G (5G/4G/3G/2G) software-enabled solution. People come to work here because we are building the future of telecom. They stay, because they are challenged and driven by an incredible technology and team. The company is engaged with 50+ leading operators worldwide and has been named as a best performing vendor by Telefonica and Vodafone. Parallel Wireless’s innovation and excellence in multi-technology, open virtualized RAN solutions have been recognized with 65+ industry awards.</div>
                </div>
            </div>
        </div>
        <WhoWeAreGrid/>
        
        <div className='flex justify-center my-16 relative hover:cursor-pointer' id='video' onClick={PlayYt}>
            {/* <img className='h-[400px]' src="https://www.parallelwireless.com/wp-content/uploads/parallel-wireless-corporate-overview-2022-1170x658.jpg" alt="" />
            <div className='absolute top-1/2 -translate-y-1/2'>
                <PlayCircle color='black' size={92} />
            </div> */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zO0utxX14Kg?si=iL0ZLvXkkPyDw23E/?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </div>
        <Footer/>
    </>
  )
}

export default WhoWeAre