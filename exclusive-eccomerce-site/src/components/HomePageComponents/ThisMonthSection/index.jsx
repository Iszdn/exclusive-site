import React from 'react'
import "./index.scss"
import BestSellings from '../BestSellings'
const ThisMonthSection = () => {
  return (
    <div id='this-month'>
<div className="container">
<div className='head'>
    <div className="rectangle"></div>
    <span className='ht'>This Month</span>
</div>
<div className='title'>
    <h2>Best Selling Products</h2>
    <div className="btn"><a href="#">View All</a></div>
</div>
<>
<BestSellings/>
</>
</div>
    </div>
  )
}

export default ThisMonthSection