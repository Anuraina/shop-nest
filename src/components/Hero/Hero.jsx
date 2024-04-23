import React from 'react'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroImg from '../Assets/hero_image.png'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="handIcon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>latest Collection</div>
          <img src={arrowIcon} alt="arrowIcon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="heroImg" />
      </div>

    </div>
  )
}

export default Hero
