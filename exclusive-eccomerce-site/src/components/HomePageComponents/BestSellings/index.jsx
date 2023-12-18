import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../../Card';

const BestSellings = () => {
    const [products, setProducts] = useState([])
    const [loadind, setLoadind] = useState(true)
    async function getProducts() {
     const data=await fetch("http://localhost:3000/best-selling")
     const res=await data.json()
     setProducts(res)
     setLoadind(false)
    }
    useEffect(() => {
        getProducts()
      }, [])

      const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
      {loadind ? (
        <p>Loading...</p>
      ) : (
        <Slider {...sliderSettings}>
          {products.map((product, index) => (
            <div key={index}>
              <Card image={product.image} title={product.title} price={product.price} discount={product.discount} rating={product.raiting}/>
            </div>
          ))}
        </Slider>
      )}
    </>
  )
}

export default BestSellings