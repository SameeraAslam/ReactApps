import React from 'react';
import '../App.css';
import profile from '../images/profile.jpg'
import Suggestions from './Suggestions';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
function Activity(){
    return(
        <div className='right-col'>
        <div className='profile-card'>
            <div className='profile-pic'><img src={profile}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>
          <Suggestions />
          <div className='profile-card'>
            <div className='profile-pic'><img src={img1}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>

          <div className='profile-card'>
            <div className='profile-pic'><img src={img2}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>
          
          <div className='profile-card'>
            <div className='profile-pic'><img src={img3}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>

          <div className='profile-card'>
            <div className='profile-pic'><img src={img4}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>

          <div className='profile-card'>
            <div className='profile-pic'><img src={img5}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>

          <div className='profile-card'>
            <div className='profile-pic'><img src={img6}/>
            </div>
            <div>
            <p className='username'>Sameera_Aslam12</p>
          <p className='subtext'>Sameera Aslam</p>
          </div>
          <button className=' action-btn'>switch</button>
          </div>
          </div>

    );


}
export default Activity;