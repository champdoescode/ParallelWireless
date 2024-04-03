import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const PartnersSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      };
  return (
    <div className='flex justify-center items-center my-24 PartnerBackground'>
        <div className="w-4/5">
        <Slider {...settings}>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p1.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p2.jpg" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p3.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p4.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p5.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p6.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p8.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p9.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p10.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p11.png" alt=""/>
              </div>
          </div>
          <div className="h-4/5 p-4  slider-box">
              <div className="flex justify-center items-center">
                  <img src="./images/p12.png" alt=""/>
              </div>
          </div>
          
         
          
        </Slider>
      </div>
    </div>
  )
}

export default PartnersSlider