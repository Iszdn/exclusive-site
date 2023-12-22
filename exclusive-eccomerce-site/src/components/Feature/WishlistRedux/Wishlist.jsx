import React from 'react'
import "./index.scss"
import { useDispatch, useSelector } from 'react-redux'
import WishCard from './WishCard/WishlistCard'
const Wishlist = () => {

    const wishlistArr = useSelector(state => state.wishlist.value)


    return (
        <div className="container">
            <div id='wishlist'>
                <div className="head">
                    <h2>
                        Wishlist({wishlistArr.length})
                    </h2>
                </div>
                <div className='row'>
                    <WishCard />
                </div>
            </div>
        </div>
    )
}

export default Wishlist