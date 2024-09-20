import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";


export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems, setCartItems]=useState({});

    const addItem=(itemId)=>{
        {!cartItems[itemId]
        ? setCartItems((prev)=>({...prev,[itemId]:1}))
        :setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))}
    };
    const removeItem=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
    
    useEffect(()=>{
         console.log(cartItems);
         
    },[cartItems])

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addItem,
        removeItem
    } 

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;