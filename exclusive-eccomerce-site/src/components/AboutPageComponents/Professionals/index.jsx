import React, { useEffect, useState } from 'react'
import "./index.scss"
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Professionals = () => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)
async function  getData() {
   const data=await fetch("http://localhost:3000/professionals")
   const res=await data.json()
   setData(res)
   setLoading(false)
}
useEffect(() => {
 getData()
}, [])

const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...sliderSettings}>
          {data.map((x) => (
            <div key={x.id} className='profi'>
            <div className="image">
                <img src={x.image} alt="" />
            </div>
            <h2>{x.name}</h2>
            <p>{x.position}</p>
            <div className="sosial">
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            </div>
                </div>
          ))}
        </Slider>
      )}
    
    </>
  )
}

export default Professionals