import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import "./index.scss"

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
const OurCard = ({image,title,price,rating }) => {
  
  return (
   
    <div>
        <div className='card0'>
        <div className='act'>
        <div ><FaRegHeart /></div>
        <div ><FaRegEye /></div>
        </div>
        <div className='add'><a href="">Add To Cart</a>
        </div>
        <div className='card-comp'>
<div className='image'>
<img src={image} alt="" />
</div>
</div>

<div className="content">
    <h2>{title}</h2>
    <div className='price-raite'>
    <span className='price'>${price} </span>
    <div className="raiting">
    {generateStars(rating)} 
    </div></div>
</div>
    </div>
    </div>

  )
}

export default OurCard