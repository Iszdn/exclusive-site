import React from 'react'
import "./index.scss"
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from '../../components/ConractPageComponents';
const ContactPage = () => {
  return (
    <div id='contact'>
      <div className="container">
    <p className='where'><span className='navi'>Home /</span> Contact</p> 
    <div className="row">
      <div className="col-lg-3 col-md-4 col-12">
        <div className='contact-us'>
          <div className='call-us'>
            <div className='icon'><div className="ico"><HiOutlinePhone /></div><p>Call To Us</p></div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <hr className='line' />
        <div className='call-us'>
        <div className='icon'><div className="ico"><MdOutlineEmail /></div><p>Write To US</p></div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
        </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-8 col-12"><ContactForm/></div>
    </div>
    </div>
    </div>
  )
}

export default ContactPage