import React,{useState} from "react";
import options from "../images/options.png";
import smiley from "../images/smiley.png";
import like from "../images/like.png";
import comment from "../images/comment.png";
import share from "../images/share.png";
import save from "../images/save.png";
import heart from "../images/heart.png";

function Post({name,img,num}){
    const [counter, setCounter] = useState(0);
    const[v,setv]= useState(false);
    const[comArray,setcomArray]= useState([]);
    
    const incrementCounter = () => 

    {
        if(v==false){
            setCounter(1);
        document.getElementById(num).src = heart;
        setv(true);
        }
        if(v==true)
        {
            document.getElementById(num).src = like;
            setCounter(0);
            setv(false);

        }
     
    }
   
    const commentPost = () => {
      var userComment = document.getElementById('comment-box').value;
 
       document.getElementById('comment-list').setAttribute(userComment);
       document.getElementById('comment-list').display = true;




    }
 return(

 <div className='post'>

  
 <div className='info'>

     <div className='user'>
       <div className='profile-pic'> <img src = {img}/></div>
       <p className='username'>{name}</p>
     </div>
     <img src={options} alt=""  className='options'/>
   </div> 
   
     <img src = {img} alt = "insta-picture" width='100%'className='post-image'/>
    <div className='post-content'>
      <div className='reaction-wrapper'>
        <img src ={like} alt="" className='icon'  onClick={incrementCounter} id={num}/> 
        <img src ={comment} alt="" className='icon'/>
        <img src ={share} alt="" className='icon'/>
        <img src ={save} alt="" className='icon save'/>
      </div>
      <p className='likes'>{counter} likes</p>
      <p className='description'><span>{name}</span>any people associate aesthetic quotes with art, which is quite untrue. ... hit your eyes is a motivational aesthetic quote on your wall?</p>
      <p className='post-time'>2 minutes ago</p>
      </div>  

      <ul className="comment-list" id="comment-list">
           <li></li>
       </ul>
     <div className='comment-wrapper'>
       <img src = {smiley} className='icon' alt=''/>
       <input type='text'className='comment-box' placeholder='Add a comment' id="comment-box" />
      
       <button className='comment-button' onClick={commentPost}>Post</button>
         </div>           
    
   </div>
  

    

    );
}
export default Post;