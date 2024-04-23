import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './cartItems.css'
const CartItems = () => {
    const{all_product, cartItems,removeFromCart,getTotalAmount} = useContext(ShopContext)
    console.log(cartItems,'cartItems')
    console.log(getTotalAmount(),'getTotalamt')
  return (
    <div className='cart-items'>
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
        {
            all_product.map((e) =>{
                if(cartItems[e.id]>0){
                  return <div key={e.id}>
                          <div className="cartitems-format cart-items-format-main">
                              <img src={e.image} alt="" className='carticon-product-icon'/>
                              <p>{e.name}</p>
                              <p>${e.new_price}</p>
                              <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} alt=""  onClick={()=>removeFromCart(e.id)}/>
                          </div>
                           <hr />
                       </div>
                }
                return null;
            })
        }
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Total</p>
                <h3>${getTotalAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promocode, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems
