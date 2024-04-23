import React from 'react'
import './breadcrum.css'
// import arrowIcon from '../Assets/arrow.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      {/* HOME <img src={arrowIcon} alt="arrow" /> SHOP <img src={arrowIcon} alt="arrow" />{product.category}<img src={arrowIcon} alt="arrow" />{product.name} */}
      HOME  &gt; SHOP &gt; {product.category}&gt; {product.name}

    </div>
  )
}

export default Breadcrum
