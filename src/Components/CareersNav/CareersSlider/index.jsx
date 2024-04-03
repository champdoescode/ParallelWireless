import React from 'react'
import Slider from 'react-slick'
import ButtonDefault from '../../ButtonDefault'

const CareersSlider = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1
      };
  return (
    <div className='my-16'>
        <div className='text-center text-4xl my-4'>Core Values</div>
        <div className="slider-container">
      <Slider {...settings} >
      <div className="slider-box">
              <div className="relative">
                  <img src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Collaborative.jpg" alt=""/>
                  
              </div>
          </div>
          <div className="slider-box">
              <div className="">
                  <img src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Customercentric.jpg" alt=""/>
              </div>
          </div>
          <div className="slider-box">
              <div className="">
                  <img src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Driven.jpg" alt=""/>
              </div>
          </div>
          <div className="slider-box">
              <div className="">
                  <img src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Innovative.jpg" alt=""/>
              </div>
          </div>
          <div className="slider-box">
              <div className="">
                  <img className='h-[480px]' src="https://www.parallelwireless.com/wp-content/uploads/Careers-Values-Image_Open.jpg" alt=""/>
              </div>
          </div>
        
      </Slider>
    </div>
        
    </div>
  )
}

export default CareersSlider