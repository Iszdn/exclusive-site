import React from 'react'
import "./index.scss"
import Card from '../../Card'
import TodaysCards from '../TodaysCards'
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
<p>Days <br />
<span>03</span> <span className='tocki'>:</span></p>
<p>Hours <br />
<span>23</span><span className='tocki'>:</span></p>
<p>Minutes <br />
<span>19</span><span className='tocki'>:</span></p>
<p>Seconds <br />
<span>56</span></p>
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