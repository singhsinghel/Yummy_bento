import React, { useContext,} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import './foodItem.css'
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/Context';
const FoodItem = ({id,name,price,description,image}) => {

  const{cartItems,setCartItems,addItem,removeItem,url}=useContext(StoreContext)
  return (
    <div className='food-item mb-2'>
     <Card sx={{ maxWidth: 300,minWidth:300}}>
      <div className="food-item-img-container position-relative">
      <CardMedia style={{width:'100%'}}
        sx={{ height: 150 }}
        image={url+'/images/'+image} 
        title={image}
      /> 
      {!cartItems[id]? <img className='cursor-pointer add' onClick={()=>addItem(id)} src={assets.add_icon_white} alt="" style={{width:'2rem'}} />
       :<div className='add counter food-item-count p-1  d-flex gap-2 align-items-center bg-light rounded-4'>
         <img className='cursor-pointer' src={assets.remove_icon_red} onClick={()=>removeItem(id)} alt="" srcset="" style={{width:'2rem'}} />
         <div>{cartItems[id]}</div>
         <img className='cursor-pointer' src={assets.add_icon_green} alt="" onClick={()=>addItem(id)} srcset="" style={{width:'2rem'}} />
       </div>
      }
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='fs-6 fs-md-5 fw-bold'>
          {name}
        </Typography>
      <img src={assets.rating_starts} />
        <Typography variant="body2" sx={{ color: '#676767',fontSize:'0.75rem' }}>
          {description}
        </Typography>
        <Typography className='fw-bold mx-3' variant="body2" sx={{ color: 'tomato', fontSize:'1.5rem' }}>
          ${price}
        </Typography>

      </CardContent>
    
    </Card>
    </div>
  )
}

export default FoodItem
