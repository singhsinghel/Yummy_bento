import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/Context'
import FoodItem from '../foodItem/FoodItem'


const FoodDisplay = ({category}) => {
    const{food_list}= useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h1 className='fw-bold' style={{fontSize:'max(2vw,1.5rem)'}}>Top dishes near you</h1>
        <div className="food-display-list mt-4 d-flex justify-content-center flex-wrap gap-4 px-2 w-100 ">
            {food_list.map((item, index)=>{
              if(category==='All'||item.category==category)
               return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            })}
        </div>
    </div>
  )
}
export default FoodDisplay
