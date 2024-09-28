import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu d-flex flex-column gap-4 mt-4' id='explore-menu'>
      <h1 className='h1 fw-bold'style={{color:'#262626'}}>Explore our menu</h1>
      <p className='explore-menu-text mw-60' style={{color:'#262626'}} >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.our mission is to satisfy your cravings and elevate your dininig experience, one delicious meal at a time.</p>
      <div className="explore-menu-list d-flex justify-content-between align-items-center gap-4 gap-sm-5 text-center mx-6" style={{overflowX:'scroll'}}>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-items cursor-pointer">
                    <img className= {category===item.menu_name?'active rounded-circle ':'All  rounded-circle '} src={item.menu_image} alt="" style={{width:'7.5vw'},{minWidth:'5rem'}} />
                    <p className='mt-3 cursor-pointer' style={{color:'#747474'},{fontSize:'max(1.4vw,16px)'}}>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}
export default ExploreMenu
