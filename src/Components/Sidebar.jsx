import React, { useState, useRef} from 'react'
import { MdOutlineLocalPostOffice,MdOutlineWorkHistory } from "react-icons/md";
import { BsCalendar2Plus,BsCamera } from "react-icons/bs";
import { IoImageOutline,IoShareOutline,IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

// file BsUpload
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { RiImageAddLine } from "react-icons/ri";
const Sidebar = ({ open }) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  const isOpen = Boolean(toggleOpen);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setToggleOpen(true);
    };

    const handleMouseLeave = () => {
        setToggleOpen(false);
        
    };
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login')
    }
  const sidebarNav = [
    { name : 'Home' , img : <IoHomeOutline />},
    { name : 'Blogs' , img : <MdOutlineLocalPostOffice />},
    { name : 'Gallery' , img : <IoImageOutline />},
    { name : 'Scheduler' , img : <BsCalendar2Plus />},
    { name : 'About' , img : <BsCamera />},
    { name : 'Contact' , img : <MdOutlineWorkHistory />},
  ]
  return (
      <div className={`sidebar-app ${!isOpen && 'not-open'} basic-center-div `} ref={sidebarRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <div className={`mini-sidebar ${!isOpen && 'not-open'} basic-center-div flex-col`}>
            <div className={`mini-head-sidebar ${!isOpen && 'not-open'} basic-center-div`}>
                <div className={`user-logo ${isOpen && 'big'}`}></div>
                <div className={`mini-head-text ${!isOpen && 'not-show'} basic-vr-center-div flex-col`}>
                    <span>Kim Jisoo</span>
                    <span>Kimjioffical@outlook.com</span>
                </div>
            </div>
            <div className={`mini-sub-sidebar ${!isOpen && 'not-open'} basic-center-div flex-col`}>
                {
                    sidebarNav.map((nav) => {
                        return(
                            <div className={`mini-mini-sub-sidebar ${!isOpen && 'not-open'}`}>
                                <div className={`nav-icon ${!isOpen && 'not-open'}`}>{nav.img}</div>
                                <div className={`mini-head-text ${!isOpen && 'not-show'}`}>{nav.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`basic-center-div`} onClick={handleLogout}>
                <div className={`logout-icon ${!isOpen && 'not-open'}`}><IoShareOutline /></div>
                <div className={`mini-head-text ${!isOpen && 'not-show'} basic-vr-center-div flex-col`}>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar

{/* <span className={`three-dot-icon ${!isOpen && 'not-open'}`}  onClick ={(e) => {  setToggleOpen(!toggleOpen); e.stopPropagation(); }} >{!isOpen ? <IoReorderThree /> : <IoCloseOutline />}</span> */}