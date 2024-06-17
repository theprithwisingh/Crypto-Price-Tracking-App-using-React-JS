import React from 'react'
import './Navbar.css'
import logo from './../assets/logo.png'
import arrow_icon from './../assets/arrow_icon.png'


function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select>
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">INR</option>
            </select>
            <button>
                Sign up
                <img src={arrow_icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar