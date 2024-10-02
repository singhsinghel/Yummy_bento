import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [food_list,setFoodList]=useState([]);
    const [cartItems, setCartItems]=useState({});
    const [open, setOpen] = useState(false);
    const url='http://localhost:8080';
    const [token,setToken]=useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    //add item in cart
    const addItem=(itemId)=>{
        {!cartItems[itemId]
        ? setCartItems((prev)=>({...prev,[itemId]:1}))
        :setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))}
    };

    //remove item in cart
    const removeItem=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
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

      useEffect(() => {
        async function  loadData() {
            console.log('fetching');
            await fetchList();
            console.log('fetched');
            
            const savedToken = localStorage.getItem('token');
            if (savedToken) {
              setToken(savedToken); 
            }
        }
        loadData();
        },[]);

    const contextValue={
        food_list,
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
        setToken
    } 
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;