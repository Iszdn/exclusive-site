import React from 'react'
import "./index.scss"
import { BsShop } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import ServicesSection from '../../components/HomePageComponents/ServicesSection';
const AboutPage = () => {
  return (
    <div id='about'>
     <div className="container">
     <p className='where'><span className='navi'>Home /</span> About</p> 
     <section className='our-story'>
      <div className="content">
<h2>Our Story</h2>
<p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
<p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
      <div className="image-story">
        <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1704067200&Signature=n-oha2AnFe24Xlahn9mfXnUsQ7NJ~Rxhd6LyYnB~5E~WaplxN6KvsDmjT-NNu~aWyLW--KyycE5B9h0jvfIOCVrxLIu5gkIPQYx2kH08COI4wIp2q1veGYfsX0T3gZ8K0aq0hpQVnB7qMqXuP3JuA3EArl~q4K~3GljTCOoWp7~DLLFCxAh9YNmpn9CA~hWzhVgnllp3sjihsZV0eQ-2~lKcPZ9hgvjUEwvmTdaZtnQbnCtC3~-mKoDBJgoGPD0QjJkAI7yxCQQTwmDlzwiY0KKqw46E4mvR0m9pI4dOOdMMOkZ49hy6ovl1mbCmAeivhDtxvG~xCS3gNNFVfL2AbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
      </section> 
      <section className='kala row'>
        <div className="carde col-lg-3">
      <div className='card-serv'>
    <div className='icon'><BsShop /></div>
    <h2>10.5k </h2>
    <p>Sallers active our site</p>
</div></div>
<div className="carde col-lg-3">
<div className='card-serv'>
    <div className='icon'><BiDollarCircle /></div>
    <h2>33k</h2>
    <p>Mopnthly Produduct Sale</p>
</div></div>
<div className="carde col-lg-3">
<div className='card-serv'>
    <div className='icon'><MdOutlineShoppingBag /></div>
    <h2>45.5k</h2>
    <p>Customer active in our site</p>
</div></div>
<div className="carde col-lg-3">
<div className='card-serv'>
    <div className='icon'><TbMoneybag /></div>
    <h2>25k</h2>
    <p>Anual gross sale in our site</p>
</div></div>
      </section>
      {/* <section id='proffessors'>
<div className="row">
  <div className="col-lg-4 col-md-"></div>
</div>
      </section> */}
      <ServicesSection/>
      </div>  
    </div>
  )
}

export default AboutPage