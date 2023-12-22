import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md"; 
import { CgHeart } from "react-icons/cg";
import { FaBarsStaggered } from "react-icons/fa6";
import "./index.scss"
import { useSelector } from 'react-redux';
const Navbar = () => {
  const wishlistArr = useSelector(state => state.wishlist.value)
  return (
    <div id='navbar'>
<div className="container">
 <nav className='nav'>
  <div className="logo">
    <h2>Exclusive</h2>
  </div>
  <ul className='navigations'>
    <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    <li><NavLink activeClassName="active" to="/signup">Sign Up</NavLink></li>
  </ul>
  <div className="right-side">
    <div className="searching">
    <input type="text" placeholder='What are you looking for' />
    <span className='search-icon'><LuSearch /></span></div>
    <div className='wish'><Link to="/wishlist"><CgHeart /></Link><div className='count'>{wishlistArr.length}</div></div>
    <div className='wish'><Link to="/wishlist"><MdOutlineShoppingCart /></Link><div className='count'>{wishlistArr.length}</div></div>
  
    <span className='bar'><FaBarsStaggered /></span>
  </div>
 </nav>
</div>
    </div>
  )
}

export default Navbar