import React, { useContext } from 'react'
import './prodDis.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = ({product}) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
            <img src={product.image} alt="" /><img  src={product.image} alt="" /><img  src={product.image} alt="" /><img  src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
            <img src={product.image} alt="" className="productDisplay-main-img" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-stars">
            <img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
            <div className="productDisplay-right-price-old">${product.old_price}</div>
            <div className="productDisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-desc">
        In this dress, you're not just adorned; you're transformed. With every stitch and every detail, it embodies the essence of grace, sophistication, and timeless beauty. It's more than just a garment; it's a statement—an expression of your unique style and unparalleled elegance.
        </div>
        <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=>addToCart(product.id)}>Add to Cart</button>
        </div>
        <p className='productDisplay-right-category'><span>Category:</span> Women, T-Shirt, Crop-Top</p>
        <p className='productDisplay-right-category'><span>Tags:</span> Modern, Latest</p>
    
      </div>
    </div>
  )
}

export default ProductDisplay
