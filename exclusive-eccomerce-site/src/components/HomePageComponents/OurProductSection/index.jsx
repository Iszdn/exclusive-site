import React from 'react'
import "./index.scss"
import OurProducts from '../OurProducts'
const OurProductSection = () => {
  return (
    <div id='our-product'>
        <div className="container">
        <div className='head'>
    <div className="rectangle"></div>
    <span className='ht'>Our Products</span>
</div>
<h2 className='titleee'>Explore Our Products</h2>
<OurProducts/>
<div className='btn-center'>
<div className='btn'><a href="">View All Products</a></div>
  </div>
        </div>
    </div>
  )
}

export default OurProductSection