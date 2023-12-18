import React from 'react'
import "./index.scss"
import { TbTruckDelivery } from "react-icons/tb";  
import { RiCustomerServiceLine } from "react-icons/ri"; 
import { AiOutlineSafety } from "react-icons/ai";
const ServicesSection = () => {
  return (
    <div id='services'>
<div className='card-serv'>
    <div className='icon'><TbTruckDelivery /></div>
    <h3>FREE AND FAST DELIVERY</h3>
    <p>Free delivery for all orders over $140</p>
</div>
<div className='card-serv'>
    <div className='icon'><RiCustomerServiceLine /></div>
    <h3>24/7 CUSTOMER SERVICE</h3>
    <p>Friendly 24/7 customer support</p>
</div>
<div className='card-serv'>
    <div className='icon'><AiOutlineSafety /></div>
    <h3>MONEY BACK GUARANTEE</h3>
    <p>We reurn money within 30 days</p>
</div>
    </div>
  )
}

export default ServicesSection