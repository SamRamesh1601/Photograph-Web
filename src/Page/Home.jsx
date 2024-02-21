import React from 'react'
import profilePic from "../Assets/OIP1.jpg"
import profilePic2 from "../Assets/6cc354f761c6840badb3eecc5de791a1--west-village.jpg"
import profilePic3 from "../Assets/c01525a8121c56c8c49b1f613741b5de.jpg"
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { IoShareSocialOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className="mini-page-view basic-center-div">
      <div className="quote-container basic-hr-center-div flex-col">
        <div className='quote-text-contain'>
       <div className='magic-word'>Photography</div>is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything
       What you have caught on film is captured forever… It remembers little things, long after you have forgotten everythin
        </div>
        <div className='button-group'>
        <button className="button-action font-big outline">About me</button>
        <button className="button-action font-big success-btn">Get Started</button>
        </div>
        <div className="basic-gap-center-div m-5">
          
          <span className='home-icon'><SlSocialYoutube /></span>
          <span className='home-icon'><SlSocialPintarest /></span>
          <span className='home-icon'><SlSocialInstagram /></span>
          <span className='home-icon'><SlSocialTwitter /></span>
          <span className='home-icon'><IoShareSocialOutline /></span>

        </div>
      </div>
      <div className="quote-container basic-center-div">
          <img src={profilePic} alt="pic" />
        <div className="profile-pic d-flex flex-col">
          <img src={profilePic2} alt="pic" />
          <img src={profilePic3} alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Home