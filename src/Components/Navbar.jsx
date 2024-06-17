import React from 'react'
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
            <select className="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
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