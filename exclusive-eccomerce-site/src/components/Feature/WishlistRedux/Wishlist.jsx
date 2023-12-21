import React from 'react'
import "./index.scss"
import { useDispatch, useSelector } from 'react-redux'
import WishCard from './WishCard/WishlistCard'
const Wishlist = () => {

    const wishlistArr=useSelector(state=>state.wishlist.value)
 

  return (
    <div className="container">
    <div id='wishlist'>
        <div className="head">
            <h2>
                Wishlist(4)
            </h2>
        </div>
<div className='row'>
    {
       wishlistArr && wishlistArr.map(x=>(
        <WishCard id={x.id} image={x.image} title={x.title} price={x.price} discount={x.discount} />
       )) 
    }
</div>
    </div>
    </div>
  )
}

export default Wishlist