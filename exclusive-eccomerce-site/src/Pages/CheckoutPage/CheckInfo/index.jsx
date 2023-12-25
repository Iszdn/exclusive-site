import React from 'react'
import "./index.scss"
import {  useSelector } from 'react-redux';

const CheckInfo = () => {
const basketArr=useSelector(state=>state.basket.value)
let subTotal = 0
    basketArr.map((product) => (
      subTotal += parseInt(product.total)
    ))

  return (
    <div className='pay'>
<div className="products">

{
    basketArr && basketArr.map(x=>(
        <div className='product'>
        <div className='img-pr'>
<div className="img">
    <img src={x.image} />
</div>
<p>{x.title}</p>
</div>
<p>${x.price}</p>
</div>
    ))
}

     
<div className="totl">
    <div className='titl'>
        <p>Subtotal:</p> 
        <p>${subTotal}</p> 
    </div>
    <hr />
    <div className='titl'>
        <p>Shipping:</p> 
        <p>Free</p> 
    </div>
    <hr />
    <div className='titl'>
        <p>Total:</p> 
        <p>${subTotal}</p> 
    </div>
   
</div>
<div className="cards-pay">
<div className='card-pay'>
    <div className='d-flex gap-20'>
        <input type="radio" />
<p>Bank</p>
</div>

<div className='bank-cards'>
<div className="image">
    <img src="https://s3-alpha-sig.figma.com/img/bacb/ff99/a8fc8e50822cb2d2d168e5d0e8bf7ea6?Expires=1704067200&Signature=qztmdivCs-zh0~qFzftcBUNKydd20NQcRgRPJaPF5fuz28Oe8DYD6OjLr9LDNniHPONjWBajfqCZ0P1UgXTZLnHtnAaZSLEh~8s~GscDVHoUeygGfuBEkzwKKbEKOdzE7~Lb8K76XL3eVoAoHIrPSPM7bOsTU6G8qOjHcLGHDRRNSVDN7Hgq2boTwOzl0n50VRP2JhM9RKiWJfBmF09qzbkz2kpICvrfnRiDOwdTwTIvU9G99KOEexwYAY2yHwZYMSu2h3ub85eJqLugfLJ~ZFpsRYTpuDtPB~QFzklizH0pm6qPEYsagRVIDd5VRgMz8XhAYg7PFlXJXymZSAkYfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
    </div>
<div className="image">
    <img src="https://s3-alpha-sig.figma.com/img/cfb0/a6ee/01b240273b40dab07f8246ef98aed88a?Expires=1704067200&Signature=ZORQ0kr9rcg0y8GSW6trZX4YYUUGACvOdK0jlEqiqzil4oSrQc9Ib8A-yHP4snIkYSpX2SmOtywVTLqz9QDclBm~XvjCjbGsVqw~IN4JzTH4~L1FTd-yQmkzqnuILlDSoyIXy1KHMe3Zwe0YbsIZEbUk0IqmLLWin6He6FBGg6lsAKpVsz7rtYoTckm8WxVnAQxzEL6IBa-9e~RTVEtj8aDUpR1nLd63LUG5EKLMQI0ai9Pw592dZvSflvZ3pqWqt1EADaIzfO6Z1xao1qF3vlHv5kWwC~Bk8XzlZuHmkWErA3mgEdNKMJY9ABF5rAudEVUrrRFEa62OmLHp~656-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
    </div>
<div className="image">
    <img src="https://s3-alpha-sig.figma.com/img/6eef/b61d/27c754abac218d25d8ea4360de61f8e8?Expires=1704067200&Signature=OcKxfzPOBuc8fR1nNzFp0FUoh9DqJISY352gNMObTKhxZidadYX6rl8cBEUk1yIZ1iVgzpC2S9nPnRpMX-7GQAzNEwGIB1VijLH8a7TyAAVipPyFYgsmh0tLmLnYr7XNZvM27Wvl5wG6zRL4a-3Egr9PSh38L7M1KNiy5ziUo7t3C78Z8G7xxR9h3Zo0GyEblQiXgYEZIkhJL9FajHahM0hqmLIGU9~MfKvAF77DgV-zt5oPvUna2-Ddl0x~9z~n-lAId7WrprGxuKmr4TcputccHO8jCiPFv8DWFhM7gLY1S2JRb~hrtZ15PL1yPKKrkVA6TdafibA7m3ctKfewLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
    </div>
<div className="image">
    <img src="https://s3-alpha-sig.figma.com/img/b28e/31b9/c88d0c9b038b82deeb0523d82cffe267?Expires=1704067200&Signature=ZSTpxoap1g1EhuVbef9~HHkJEY8EaJyGWH8dwy2MsnersKyZiu11hkgxZg5akANfuCNeUzLhB5p7Go3izuKpi3itkJ-r4SAye0dddIL0bbQd94y335oMkxJdsOUChN~qn-lPLomGzRtmwQ5iQBHEiUxu0jKlIoHDfC1XiSjWwgWkdyYqvU4wqAXSiSf3J3UCrbtmnOiXXZtinhaoeH44ztrLL-USc4fKNjqbYyevIxWPhG8fCc03VNLf7J5DXpRL0BtJ8DC5QmXv98WkDC75LlFTPC1U2rGnijap~9G-TJpeUgTatlsbL-igowCYNGA6ZGUqKGJs6LhkrIpquZRbQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
    </div>
</div>
</div>
<div className="cash">
<div className='d-flex gap-20'>
        <input type="radio" />
<p>Cash on delivery</p>
</div>
</div>
</div>

</div>
<div className="coupon">
    <div className="cod">
        <span>Coupon Code</span>
    </div>
    <div className="btn-coup">
<a>
Apply Coupon
</a>
    </div>
</div>
<div className="btn-place">
<a>
Place Order
</a>
    </div>
    </div>
  )
}

export default CheckInfo