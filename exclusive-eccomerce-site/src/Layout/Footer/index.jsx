import React from 'react'
import "./index.scss"
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="top">
<div className="container">
  <div className="row">
    <div className="ex col-lg-3">
      <h2>Exclusive</h2>
      <h3>Subscribe</h3>
      <p>Get 10% off your first order</p>
      <form action="">
        <input type="text" placeholder='Enter your email' />
        <span className='icon'><VscSend /></span>
      </form>
    </div>
    <div className="col-lg-2">
      <h3>Support</h3>
      <ul>
        <li>
        111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
        </li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
      </ul>
    </div>
    <div className="col-lg-2">
      <h3>Account</h3>
      <ul>
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>
    </div>
    <div className="col-lg-2">
      <h3>Quick Link</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="qrcod col-lg-3">
      <h3>Download App</h3>
      <span className='save'>Save $3 with App New User Only</span>
      <div className='qr'>
        <img className='size-80' src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1703462400&Signature=aPCBQzZrkUGNi3orOgrVk1mlWyIgyZIRESD-ERB5t1VsqBE2h2uXD48QuI5pHdGCa2IFuLf3OVrpjs3U55jz7zjyrVtj8HC6Y1Z0V20Z9balFC0t3EajAfK4Eyve2OBc5Kew2~O5AodtxSfiVtI73fPW-NFU76He1VAVfCWRT00TuLcTfHwCiy9NMMdiQWp2s3GTe0zkpTBnNjD2iubVX25SwQYoiNUO6XzE~yFV0xaIZulcM0YLvM5PRb4SpSJtnDSZE7WXvdR-nMrYNzsitLkap6mYWhNLtClwROHlNakpGhq1R0rjNHLaxqDHAD~5U9rMdS5chU1Jqd3TdMjEaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
<div className='get'>
  <div className='size-30'>
<img  src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1703462400&Signature=eYZyWnGEvWkYqiet6XsyAHqTXI2oO-uLQU51hSKwIjmlrJgWmI8JymoiJJAfa8O6wr8WnZNEu99-isbCmMhQRWklny2ZzvfkjNuUYV7mAly0NCWCks-iGIgH9Rg2-YaldSjS1lMsO4UBkwT3dY32DRLtzpmIS5yi27yosYg5bsxS4SlVmSqhC-47y7CJXA3zJUFq0-Yc0pr1vw6-6FtMQ1AXCRdGvhlOTAHPDWqLpfv6dNGCYt4NzgZK7RVwtLQMdjwrdSMTBbHojN3rvOBxGTqWSHN1OpJqmr2oAbD9btycCPnCjgmEavNTv1Fgxl2A930MWHwi5trI4851hhMe2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
<div className='size-40'>
<img  src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1703462400&Signature=DA9iA9-OFf~NUjNxX-FRM8SFU7Ik7vWvCkWWYxH~KAUqHM3YSgYPvHYZ-iW7cZrXXyJLk-vdEQ9-l~Hn1RZxWSrxhqpRU0AcTjNUSx473p9MSIkBV6SU0lHRE0VXYZYw0PoM-zWhtrTJw0LqAHSKMngAt0RDJwPSJ6uRCFWHKT6iOtqcR4kcjuc0MEQ~n73RNCsDO54bwtkKU8psNl-JMpJ2tHh8PhPhXdXLLRfGtuYibBt~y0i1xMBOt0hvXqofTg5bXqR1-mQXzm8CYVF2ZnSaY1Y1HetuxuF7U~6IzIPzdkkVyD-qp9PDAdsiffb2LXrXC~xr35QGfG6kN8oReA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
</div>
      </div>
      <div className='sosial'>
        <span><FaFacebookF /></span>
        <span><RxTwitterLogo /></span>
        <span><FaInstagram /></span>
        <span><FaLinkedinIn /></span>
      </div>
    </div>
  </div>
</div>
<div className=" custom">
 <LuCopyright  className='icon' />
 <p>Copyright Rimel 2022. All right reserved</p>
</div>
</div>

    </footer>
  )
}

export default Footer