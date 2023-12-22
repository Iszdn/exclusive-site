import React from 'react'
import { MdDelete } from "react-icons/md";
import "./index.scss"
import { Link } from 'react-router-dom';
import { deleteWish } from '../WishlistSlice';
import { useDispatch, useSelector } from 'react-redux';



const WishCard = () => {

  const wishlistArr = useSelector(state => state.wishlist.value)
  // const discountedPrice = price - (price * discount) / 100;
 
  const dispatch = useDispatch()


  return (
    <>
      {
        wishlistArr && wishlistArr.map(x => (
          
          <div className='col-lg-4 col-md-4 col-6'>
            <div className='card0'>
              <div className='act'>
                <div onClick={() => dispatch(deleteWish(x))} ><MdDelete /></div>

              </div>
              <div className='add'><Link>Add To Cart</Link>
              </div>
              <div className='card-comp'>
                <div className='image'>
                  <img src={x.image} alt="" />
                </div>
              </div>

              <div className="content">
                <h2>{x.title}</h2>
                {/* <span className='price'>${discountedPrice.toFixed(2)} </span> */}
                <span className='discount'> <del>${x.price}</del></span>

              </div>
            </div>
          </div>

        ))

      }

    </>

  )
}

export default WishCard