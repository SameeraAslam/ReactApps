import React from 'react';
import '../App.css';
import instagramLogo from "../images/instagramLogo.png";
import home from "../images/home.png";
import messenger from "../images/messenger.png";
import add from "../images/add.png";
import explore from "../images/explore.png";
import like from "../images/like.png";
import profile from "../images/profile.png";

function Navigation() {
  return (
    
    <nav className='navbar'>
     <div className='wrapper'>
       <img src={instagramLogo} alt="instagram Logo" className='brand-img'/>
       <input type='text' className='search-icon' placeHolder='Search'/>
       <div className='nav-items'>
         <img src={home} className='icon' alt="" />
         <img src={messenger} className='icon' alt="" />
         <img src={add} className='icon' alt=""  />
         <img src={explore} className='icon' alt=""  />
         <img src={like} className='icon' alt=""  />
         <div className='icon user-profile'>
           <img src={profile} alt = "" width="22px" height="22px" />
         </div>

       </div>
     </div>
      

    </nav>
   
  );
}

export default Navigation;
