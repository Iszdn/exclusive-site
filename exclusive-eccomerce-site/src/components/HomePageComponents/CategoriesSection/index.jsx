import React from 'react'
import "./index.scss"
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { VscDeviceCamera } from "react-icons/vsc";
import { ImHeadphones } from "react-icons/im";
import { TbDeviceGamepad } from "react-icons/tb";
const CategoriesSection = () => {
  return (
    <div className="container">
    <div id='categories'>
<div className="container">
<div className='head'>
    <div className="rectangle"></div>
    <span className='ht'>Categories</span>
</div>
<h2 className='title'>Browse By Category</h2>
<div className='browse'>
<div className="row">
    <div className='brcard col-lg-2 col-md-4 col-6'>
<div className='prod'>
<IoIosPhonePortrait className='icon' />
<p>Phones</p>
</div>
    </div>
    <div className='brcard col-lg-2 col-md-4 col-6'>
<div className='prod'>
<HiOutlineDesktopComputer className='icon' />
<p>Computers</p>
</div>
    </div>
    <div className='brcard col-lg-2 col-md-4 col-6'>
<div className='prod'>
<TbDeviceWatchStats className='icon'/>
<p>SmartWatch</p>
</div>
    </div>
    <div className='brcard col-lg-2 col-md-4 col-6'>
<div className='prod'>
<VscDeviceCamera  className='icon' />
<p>Camera</p>
</div>
    </div>
    <div className='brcard col-lg-2 col-md-4 col-6'>
<div className='prod'>
<ImHeadphones className='icon'/>
<p>HeadPhones</p>
</div>
    </div>
    <div className='brcard col-lg-2 col-md-4 col-6'>
<div className='prod'>
<TbDeviceGamepad  className='icon'/>
<p>Gaming</p>
</div>
    </div>
</div>
</div>

</div>
    </div>
    </div>
  )
}

export default CategoriesSection