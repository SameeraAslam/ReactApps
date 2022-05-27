import React from "react";
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import '../App.css';
function Carousel(){
    return(
<div className="carousel-class">
    <div className="text-tag">
        <h1 className="heading">Explore Our Best Levels!</h1>
    </div>
    <div className="carousel-tag">
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" 
data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={pic3} class="d-block w-100" alt="..." />
    </div>
    
  </div>
  
 < button class="carousel-control-prev" type="button" 
data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
   
</div>
</div>



                
<div className="partner-tag">
        <h1 className="partner-heading">PARTNERS</h1>
        <div className="partner-divs">
        <button >TribeOne</button>     
        <button>UnoRe</button>     
        <button >ClosedSea</button>     
        <button > Apes</button>  
        <button>Footie+</button>
    </div></div>

    
</div>




    );
}
export default Carousel;