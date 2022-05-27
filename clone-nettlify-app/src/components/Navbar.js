import React from "react";
import '../App.css';
import logo from '../images/appLogo.png';
function Navbar(){
    return(
        <nav className='navbar-top'>
        <div className='wrapper-top'>
          <img src={logo} alt='App logo' className='nav-img'/>
        
          <div className='navbar-items'>
          <button  class="btn-mint ">Mint</button>           
   
          </div>
        </div>
         
   
       </nav>
      

    );
}
export default Navbar;