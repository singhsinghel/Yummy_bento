import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";


export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItems, setCartItems]=useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addItem=(itemId)=>{
        {!cartItems[itemId]
        ? setCartItems((prev)=>({...prev,[itemId]:1}))
        :setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))}
    };
    const removeItem=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };

    const getTotalCartAmt=()=>{
        let totalAmt=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmt+=itemInfo.price* cartItems[item];
            }
        }
        return totalAmt;
    }
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        getTotalCartAmt,
        open,
        handleOpen,
        handleClose
    } 
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;