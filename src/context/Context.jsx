import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [food_list,setFoodList]=useState([]);
    const [cartItems, setCartItems]=useState({});
    const [open, setOpen] = useState(false);
    const url='https://yummy-bento-backend.onrender.com';
    const [token,setToken]=useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    //add item in cart
    const addItem=async(itemId)=>{
        {!cartItems[itemId]
        ? setCartItems((prev)=>({...prev,[itemId]:1}))
        :setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))}
        if(token){
            await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
        }
    };
    //remove item in cart
    const removeItem=async(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
      if(token){
        await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}})
    }
    };
    
    //getting total cart amount
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

    const fetchList=async()=>{
        const response= await axios.get(`${url}/api/food/list`);
        if(response.data.success){
           setFoodList(response.data.data)
        }
        else{
          toast.error(response.data.error);
        }
    };
    const  loadCartData=async(token)=>{
        if(token){
           const response= await axios.post(url+'/api/cart/fetch',{},{headers:{token}});
            setCartItems(response.data.cartData)
        }
    }
    
      useEffect(() => {
        async function  loadData() {
            await fetchList();
            const savedToken = localStorage.getItem('token');
            if (savedToken) {
              setToken(savedToken);
              await loadCartData(savedToken);
            }
            else{
                setCartItems({});
            }
        }
        loadData();
        },[]);

    const contextValue={
        food_list,
        setFoodList,
        fetchList,
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        getTotalCartAmt,
        open,
        handleOpen,
        handleClose,
        url,
        token,
        setToken,
        loadCartData,
    } 
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;