import React,{useContext, useState} from 'react'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("Shop")
    const {getTotalItems} = useContext(ShopContext)
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src = {logo} alt = "logo"/>
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("Shop")}><Link to="/" style={{textDecoration:'none'}}>Shop</Link> {menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Men")}><Link to="/men" style={{textDecoration:'none'}}>Men</Link> {menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Women")}><Link to="/women" style={{textDecoration:'none'}}>Women</Link> {menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Kids")}><Link to="/kids" style={{textDecoration:'none'}}>Kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"> <button>Login</button></Link>
            <Link to="/cart"><img src={cartIcon} alt="cart" /></Link>
            <div className='nav-cart-count'>{getTotalItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
