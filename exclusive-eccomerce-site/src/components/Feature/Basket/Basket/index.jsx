import React from 'react'
import "./index.scss"
import { Link, useNavigate} from 'react-router-dom'
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { decrementBasket, deleteBasket, increamentBasket } from '../BasketSlice';


const Basket = () => {
    const basketArr=useSelector(state=>state.basket.value)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    let subTotal = 0
    basketArr.map((product) => (
      subTotal += parseInt(product.total)
    ))
  return (
    <div className="container">
    <div id='basket'>
    <p className='where'><span className='navi'>Home /</span> Cart</p> 
    <div className='products'>
<div className='product'>  
<p>Product</p>
<p>Price</p>
<p>Quantity</p>
<p>Subtotal</p>
</div>
{
basketArr && basketArr.map(x=>(
    <div className='product'>
    <div className='image-x'>
    <div className='x' onClick={()=>dispatch(deleteBasket(x))} >
        x
    </div>
        <div className='img-pr'>
    
<div className="img">
    <img src={x.image} alt="" />
</div>
<p>{x.title}</p>
</div>
</div>

<p>${x.price}</p>
<div className='quanity'>
<span>{x.count}</span>
<div className="icons">
<RiArrowDropUpLine onClick={()=>dispatch(increamentBasket(x))}/>
<RiArrowDropDownLine onClick={()=>dispatch(decrementBasket(x))}/> 
</div>
</div>
<div className="subtotal">
    <p>${x.total}</p>
</div>
</div>
))


}
<div className="btnnnn">
    <div className="btn1">
        <Link to="/">
    Return To Shop
        </Link>
    </div>
    <div className="btn1">
        <Link>
        Update Cart
        </Link>
    </div>

</div>
<div className="bottom">
<div className="coupon">
    <div className="cod">
        <span>Coupon Code</span>
    </div>
    <div className="btn-coup">
<Link>
Apply Coupon
</Link>
    </div>
</div>
<div className="totl">
    <h3>Cart Total</h3>
    <div className='titl'>
        <p>Subtotal:</p> 
        <p>${subTotal}</p> 
    </div>
    <hr />
    <div className='titl'>
        <p>Shipping:</p> 
        <p>Free</p> 
    </div>
    <hr />
    <div className='titl'>
        <p>Total:</p> 
        <p>${subTotal}</p> 
    </div>
    <div className='text-center'>
<div onClick={() => navigate("/home/My Account/Product/View Cart")} className="checkout">
    <Link >Procees to checkout</Link>
    </div>
</div>
</div>
</div>
    </div>
    </div>
</div>
  )
}

export default Basket