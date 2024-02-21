import React from 'react'
import { GoBell } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { IoBagAddOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="navbar-app basic-gap-center-div">
        <div className='left-side basic-hr-center-div nav-head-txt'>
            <span className="nav-head-txt">Creative</span>
            <span className="gry-line">&nbsp;</span>
            <span className="nav-head-txt white">Home</span>
        </div>
        <div className='left-side basic-center-div nav-head-txt'>
            <input className="nav-bar-input" placeholder="search" />
            <button className="appointment-btn basic-gap-center-div ">Get Appointments</button>
        </div>
        <div className='right-side basic-hr-center-div nav-head-txt'>
            <span className="navbar-icon"><GoBell /></span>
            <span className="navbar-icon"><IoMailOutline /></span>
            <button className="button-action outline">Login</button>
        </div>
    </div>
  )
}

export default Navbar