import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonDefault from '../ButtonDefault';

const HomeSlider = () => {
        var settings = {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToScroll: 1,
          slidesToShow: 1
        };
  return (
    <div className=''>
        <div className="slider-container">
      <Slider {...settings} >
      <div className="slider-box">
              <div className="relative">
                  <img src="./images/website-banner.jpg" alt=""/>
                  <div className='absolute left-9 top-1/3 z-10 text-white text-xl sm:text-xl md:text:3xl lg:text-xl w-2/5'>
                    <div>Pioneering Unprecedented Open RAN Hardware-Agnostic Solutions</div>
                    <div className='flex mt-4'>

                      <ButtonDefault  heading='LEARN MORE >>'/>
                    </div>

                  </div>
              </div>
          </div>
          <div className="slider-box">
              <div>Double Highted Air-Con Lobby</div>
              <div className="">
                  <img src="./images/g2-small.jpg" alt=""/>
              </div>
          </div>
        
      </Slider>
    </div>
        
    </div>
  )
}

export default HomeSlider