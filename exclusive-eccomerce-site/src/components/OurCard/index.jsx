import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import "./index.scss"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWishlist } from '../Feature/WishlistRedux/WishlistSlice';
import { addBasket } from '../Feature/Basket/BasketSlice';

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
const OurCard = (product) => {
 const  dispatch=useDispatch()
  return (
   
    <div>
        <div className='cardour'>
        <div className='act'>
        <div className='heart' onClick={() => dispatch(addWishlist(product))}><FaRegHeart /></div>
        <div className='eye'><Link to={`/details/`+ product.id}><FaRegEye /></Link></div>
        </div>
        <div className='add' onClick={() => dispatch(addBasket(product))}><Link>Add To Cart</Link>
        </div>
        <div className='card-comp'>
<div className='image'>
<img src={product.image} alt="" />
</div>
</div>

<div className="content">
    <h2>{product.title}</h2>
    <div className='price-raite'>
    <span className='price'>${product.price} </span>
    <div className="raiting">
    {generateStars(product.raiting)} 
    </div></div>
</div>
    </div>
    </div>

  )
}

export default OurCard