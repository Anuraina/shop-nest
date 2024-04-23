import Navbar from '../src/components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product';
import Footer from './components/Footer/Footer';
import women_banner from './components/Assets/banner_women.png'
import men_banner from './components/Assets/banner_mens.png'
import kid_banner from './components/Assets/banner_kids.png'
import Cart from './Pages/Cart'

function App() {  
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Shop/>}/>
        <Route path = "/men" element={<ShopCategory category="men" banner={men_banner}/> }/>
        <Route path = "/women" element={<ShopCategory category="women" banner={women_banner}/> }/>
        <Route path = "/kids" element={<ShopCategory category="kid" banner={kid_banner}/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path = "/product/:productId" element={<Product/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/login" element={<LoginSignup category="kid"/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
