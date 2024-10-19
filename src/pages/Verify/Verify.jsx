import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import './verify.css'


const Verify = () => {
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    const [searchparams, setSearchParams] =useSearchParams();
    const success=searchparams.get("success");
    const orderId=searchparams.get('orderId');
    
    const verifyPayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            //after verification of payment redirect to myOrders
            navigate('/myorders');
            toast.success(response.data.message).then(
            toast.success("New coupon earned"))
        }
        else{
            navigate('/')
            toast.error(response.data.message)
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
  return (
    <div className='verify' >
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
