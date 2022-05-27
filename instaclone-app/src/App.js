import React,{useEffect, useState} from "react";
import './App.css';
import Navigation from './components/Navigation';
import Storyslider  from './components/Storyslider';
import Post from './components/Post';
import Activity from './components/Activity';



function App() {

  const[user,setuser]=useState([]);
  
    const getUsers =  async()=>{
       try{
      
        const response=  await fetch('https://api.github.com/users');
        setuser( await response.json());
        setReverseUser(user);


       }
       catch(e){
           console.log('your error is :' +e);
       }
          
            
        }
    
        useEffect(()=>
        {
            getUsers();
        
        },[]);
   





  return (

    <div className="App">
    <Navigation />
 <section className='main'>
      <div className='main-wrapper'>
       
      <div className='left-col'>
      <div className='status-wrapper'>
      {
         user.map((item) => {

            return(
            
<Storyslider name = {item.login}  img = {item.avatar_url}/>

      

            );
            })
      }
            </div>

            {
         user.slice().reverse().map((item) => {

            return(
            
<Post name = {item.login}  img = {item.avatar_url}  num = {item.id}/>
      

            );
            })
      }




</div>
        


<Activity />
        
       

        
        
        
        
      </div>
     
    </section>
  

    </div>
  );
}

export default App;
