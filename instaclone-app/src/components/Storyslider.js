import React from 'react';
import '../App.css';
function Storyslider({name,img}) {
  return (
    
   
    <div className='status-card'>
    <div className='profile-pic'>
      <img src ={img} alt="insta pictures"/>
  
    </div>
    <p className='user-name'>{name}</p>
    </div>
  );
}

export default Storyslider;
