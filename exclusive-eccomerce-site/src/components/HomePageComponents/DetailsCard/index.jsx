import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import "./index.scss"
import { useDispatch } from 'react-redux';
import { addWishlist } from '../../Feature/WishlistRedux/WishlistSlice';
import { addBasket, decrementBasket, increamentBasket } from '../../Feature/Basket/BasketSlice';
import { Link } from 'react-router-dom';
const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= rating ? '#FFAD33' : 'gray'}
          style={{ marginRight: '2px' }}
        />
      );
    }
    return stars;
  };
const DetailsCard = ({image,title,price,des,rating}) => {
const   dispatch=useDispatch()
  return (
    <div className='detail'>
<div className='image-det'>
    <img src={image} alt="" />
</div>
<div className="content">
    <h2>{title}</h2>
    <div className="raiting"> 
    {generateStars(rating)}
  
    </div>
    <span className="price">${price}</span>
<p className='des'>{des}</p>
<hr className='line'/>
<div className='quan'>
<div className='incdec'>
  <button  onClick={()=>dispatch(decrementBasket({image,title,price,des,rating}))}>-</button>
  <div className='count'>1</div>
  <button onClick={()=>dispatch(increamentBasket({image,title,price,des,rating}))}>+</button>
</div>
<div className="btn" onClick={()=>dispatch(addBasket({image,title,price,des,rating}))}>
    <Link href="">Buy Now</Link>
</div>
<div className='icon' onClick={()=>dispatch(addWishlist({image,title,price,des,rating}))} ><FaRegHeart /></div>
</div>
<div className='delivery'>
    <div className="free">
        <span><TbTruckDelivery /></span>
        <div className='delfree'>
            <h5>Free Delivery</h5>
        <p>Enter your postal code for Delivery Availability</p>
        </div>
    </div>
    <hr />
    <div className="free">
    <span><TbTruckReturn /></span>  
        <div className='delfree'>
            <h5>Return Delivery</h5>
        <p>Free 30 Days Delivery Returns. Details</p>
        </div>
    </div>
    
</div>
</div>
    </div>
  )
}

export default DetailsCard