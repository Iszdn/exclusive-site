import React from 'react'
import "./index.scss"
import Card from '../../Card'
import TodaysCards from '../TodaysCards'
import Timer from '../Timer'
const TodaysSection = () => {
  return (
    <div id='todays'>
  <div className='container'>
<div className='head'>
    <div className="rectangle"></div>
    <span className='ht'>Today’s</span>
</div>
<div className="flash-sales">
    <h2>Flash Sales</h2>
    <div className='timer'>
<Timer/>
    </div>

</div>
<div className='tod'>
    <TodaysCards/>
</div>
<div className='btn-center'>
<div className='btn'><a href="">View All Products</a></div>
  </div>
  </div>
    </div>
  )
}

export default TodaysSection