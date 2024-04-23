import React ,{createContext,useState} from 'react'
import all_product from '../components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
     for(let i=0; i<all_product.length; i++){
        cart[i] = 0;
     }
     return cart;
}
const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
    }

    const getTotalItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
            
        }
        return totalItem;
    }
    const getTotalAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) =>product.id === Number(item));
                console.log(itemInfo,'cartItemInfo')
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalAmount, getTotalItems};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider