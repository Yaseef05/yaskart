import React from 'react';
import './BannerCarousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const BannerCarousel = ({data}) => {
    const setting = {
      dots: false,
      infinite: false,
      speed: 1000,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:3000,
    };
  return (
    <div className='BannerCarousel'>
        <Slider {...setting}>
            {
                data.map((item)=>(
<div key={item.id}>
    <img src={item.Imgsrc} alt='' className='BannerCarousel-Image'></img>
</div>
                ))
            }
            
        </Slider>
    </div>
  )
}

export default BannerCarousel