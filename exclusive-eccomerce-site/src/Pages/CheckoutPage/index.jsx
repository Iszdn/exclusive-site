import React from 'react'
import "./index.scss"
import CheckInfo from './CheckInfo'
const CheckoutPage = () => {
  return (
    <div id='checkout-page'>
        <div className="container">
        <p className='where'><span className='navi'>Home / My Account / Product / View Cart / </span> Cart</p>
        <div className="deta">
<div className="bil">
<div className="billing-details">
    <h2>Billing Details</h2>
    <form action="">
<label>First Name*</label>
<input type="text" required/>
<label>Company Name</label>
<input type="text" required />
<label>Street Address*</label>
<input type="text" required/>
<label>Apartment, floor, etc. (optional)</label>
<input type="text" required/>
<label>Town/City*</label>
<input type="text" required/>
<label>Phone Number*</label>
<input type="text" required/>
<label>Email Address*</label>
<input type="text" required/>
<div className=' check'><input  type="checkbox" />
<p >Save this information for faster check-out next time</p></div>

    </form>
</div>
</div>
<div className="info">
<CheckInfo/>
</div>
        </div>


        </div>

    </div>
  )
}

export default CheckoutPage