import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import "./index.scss"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addWishlist } from '../Feature/WishlistRedux/WishlistSlice';

const generateStars = (rating) => {
  console.log(rating);
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
  
const Card = ( product ) => {
  const dispatch = useDispatch()
  const discountedPrice = product.price - (product.price * product.discount) / 100;

  return (

    <div>
      <div className='card0'>
        <div className='act'>
          <div onClick={() => dispatch(addWishlist(product))} ><FaRegHeart /></div>
          <div ><Link to={`/details/` + product.id}> <FaRegEye /> </Link></div>
        </div>
        <div className='add'><Link>Add To Cart</Link>
        </div>
        <div className='card-comp'>
          <div className='image'>
            <img src={product.image} alt="" />
          </div>
        </div>

        <div className="content">
          <h2>{product.title}</h2>
          <span className='price'>${discountedPrice.toFixed(2)} </span>
          <span className='discount'> <del>${product.price}</del></span>
          <div className="raiting">
            {generateStars(product.raiting)}
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card