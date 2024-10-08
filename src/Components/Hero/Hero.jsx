import React from 'react';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import './Hero.css';

const Hero = () => {
  return (
  
<div className='hero'>
  <div className="hero-left">
  <h2>NEW ARRIVALS</h2>
<div>
  <div className="hero-hand-icon">
   
  </div>
  <p>Shop our "New Items" </p>
  <p>Collection to see all of our</p>
  <p>"fresh out the box" pieces!</p>
</div>
<div className="hero-latest-btn">
  <div>Latest Collection</div>
  <img src={arrow_icon} alt="" />
 
</div>
  </div>
  <div className="hero-right">
  <img src={hero_image} alt="" />
  </div>
 

</div>


  )
}


export default Hero;
