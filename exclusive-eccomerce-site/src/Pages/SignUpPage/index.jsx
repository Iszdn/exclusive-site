import React from 'react'
import "./index.scss"
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  return (
   
    <div className="container">
      <div id='sign-up'>
<div className='image-sign'>
  <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1704067200&Signature=arb0jdLVeBEtmb-xK1CHLqsyvaaanspdkF96H9VfCfasKDpQswfOAhuSccak3p3W8vRvsIqch6F67X1Dyl9BcAQekKWqekSnzpxeu3xQi80xP1K7HoABf7sZFGXnBFhS~ulkdvZNYrBSPQV7rpbqEgKEyXM4hcw-a0VKs2vsaiJlTfImJYw3JAdF0rgYvUdQ1LxVvWkwgDLVHn~mWmyraEd7vcowLOjYYM~7V0l6~U15qKMR27WHOFLp1YhkwWeTfadhwp6n9XisXqTxlabJ0mOP7o3QYWjPjwI-xpPyCA~Qd-gj89CJNStUR69aD0L7RwfGpjCKluM-TGTacyrlDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
</div>
<div className="sign-form">
  <h2>Create an account</h2>
  <p>Enter your details below</p>
  <form action="#">
    <div className='inp'>
    <input type="text" placeholder='Name' /></div>
    <div className='inp'>
    <input type="email" placeholder='Email or Phone Number' /></div>
    <div className='inp'> <input type="password" placeholder='Password' /></div>
    <button className='btn'>Create Account</button>
    <button className='google'><FcGoogle />Sign up with Google</button>
    <div className='text text-center'><p>Already have account?
       <Link to={"/login"}>Log in</Link>
       </p></div>
    
  </form>
</div>
   </div>
   </div>
  )
}

export default SignUpPage