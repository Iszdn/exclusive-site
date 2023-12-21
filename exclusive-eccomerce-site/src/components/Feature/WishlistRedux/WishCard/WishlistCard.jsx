import React from 'react'

import "./index.scss"
import { Link } from 'react-router-dom';



const WishCard = ({id,image,title,price,discount }) => {
  const discountedPrice = price - (price * discount) / 100;
  console.log(id);
  return (
   
    <div className='col-lg-3 col-md-4 col-6'>
        <div className='card0'>
        <div className='act'>
        </div>
        <div className='add'><Link>Add To Cart</Link>
        </div>
        <div className='card-comp'>
<div className='image'>
<img src={image} alt="" />
</div>
</div>

<div className="content">
    <h2>{title}</h2>
    <span className='price'>${discountedPrice.toFixed(2)} </span>
    <span className='discount'> <del>${price}</del></span>
    
</div>
    </div>
    </div>

  )
}

export default WishCard