import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const AccountPage = () => {
  return (
    <div id='account'>
        <div className="container">
          <div className="top">
          <p className='where'><span className='navi'>Home / </span> My Account</p>
          <p>Welcome! <span className='coloor'>Md Rimel</span></p>
          </div>
       
        <div className="profilr row">
<div className="col-lg-3 col-md-12 col-12 manage">
  <h3>Manage My Account</h3>
  <ul>
    <li>My Profile</li>
    <li>Address Book</li>
    <li>My Payment Options</li>
  </ul>
  <h3>My Orders</h3>
  <ul>
    <li>My Returns</li>
    <li>My Cancellations</li>
    
  </ul>
  <h3>My WishList</h3>
  
</div>
<div className="col-lg-9 col-md-12 col-12 edit">
  <h4>Edit Your Profile</h4>
  <form>
<div className='name'>
  <div className='names'>
<label>First Name</label>
<input type="text" placeholder='First Name' />
</div>
<div className='names'>
<label>Last Name</label>
<input type="text" placeholder='Last Name' />
</div>
</div>

<div className='name'>
  <div className='names'>
<label>Email</label>
<input type="text" placeholder='Email' />
</div>
<div className='names'>
<label>Address</label>
<input type="text" placeholder='Address' />
</div>
</div>

<label>Password Changes</label>
<input type="text" placeholder='Current Passwod'/>
<input type="text" placeholder='New Passwod'/>
<input type="text" placeholder='Confirm New Passwod'/>
<div className='save'>
<p>Cancel</p>
<div className="btn">
  <Link>Save Changes</Link>
</div>
</div>
  </form>
</div>
        </div>
        </div>
    </div>
  )
}

export default AccountPage