import React, {useState,useEffect } from "react";
function Weather(){
    const[city,setcity]=useState(null);
    const[search,setsearch]=useState("Mumbai");

    useEffect(()=>{
    const FetchApi = async()=>{
        try{
       
           const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3812f9e7b1d38e5dbb4f5df3862101c4`;
        const res = await fetch(url);
        const data = await res.json();
        setcity(data.main);
        console.log(city)

      
        }
        catch(e){
            console.log(' error is' + e);
        }
    }



    
FetchApi();
},[search])



    return(
        <>
       <div className="box">
           <div className='inputData'>
               <input type='search' className='inputField' onChange={(e)=>setsearch(e.target.value) }  />
           </div>
       

   
   
         <div className='info'>
         <h2 className='location'><i class="fas fa-street-view"></i>{search}</h2>
         <h1 className='temp'>
            
     
         </h1>
  <h3 className='tempmin_max'> Min : 5.25' Cel │ Max : 5.25' Cel</h3>
      </div>


      <div className='wave  one'></div>
      <div className='wave  two'></div>
      <div className='wave  three'></div>
      

      
</div>

        </>
    )
}
export default Weather;