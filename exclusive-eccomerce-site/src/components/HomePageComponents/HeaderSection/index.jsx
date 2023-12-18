import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import { IoIosArrowForward } from "react-icons/io";
import frame from '../../../assets/img/Frame 560 (2).png'
const HeaderSection = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(index === activeDropdown ? null : index);
  };

    return (
        <div id='headers'>
            <div className="container">
                <div className="row">
                    <ul className='categor col-lg-3 col-md-12 col-12 '>
                        <li className='li1' onClick={() => handleDropdownToggle(1)}><div className='d-flex justify-content-between align-items-baseline'><Link>Woman’s Fashion</Link> <span style={{ transform: activeDropdown === 1 ? 'rotate(90deg)' : 'rotate(0deg)' }}  ><IoIosArrowForward /></span></div>
                            
                        {activeDropdown === 1 && (
                <ul className="dropdown">
                  <li>Woman 1</li>
                  <li>Woman 2</li>
                  <li>Woman 3</li>
                  <li>Woman 4</li>
                  <li>Woman 5</li>
                  <li>Woman 6</li>
                </ul>
              )}         
                        </li>
                        <li onClick={() => handleDropdownToggle(2)}><div className='d-flex justify-content-between align-items-baseline'><Link >Men’s Fashion</Link><span style={{ transform: activeDropdown === 2 ? 'rotate(90deg)' : 'rotate(0deg)' }}><IoIosArrowForward /></span></div>
                        {activeDropdown === 2 && (
                            <ul className='dropdown'>
                            <li> man 1</li>
                            <li> man 2</li>
                            <li> man 3</li>
                            <li> man 4</li>
                            <li> man 5</li>
                            <li> man 6</li>
                        </ul> 
                        )}
                        </li>
                        <li><Link>Electronics</Link></li>
                        <li><Link>Home & Lifestyle</Link></li>
                        <li><Link>Medicine</Link></li>
                        <li><Link>Sports & Outdoor</Link></li>
                        <li><Link>Baby’s & Toys</Link></li>
                        <li><Link>Groceries & Pets</Link></li>
                        <li><Link>Health & Beauty</Link></li>
                    </ul>
                    <div className='headerimg col-12 col-md-12 col-lg-9'>
                       
                        <img src={frame} alt="" /></div>
                   
                </div>

            </div>
                          
        </div>
    )
}

export default HeaderSection