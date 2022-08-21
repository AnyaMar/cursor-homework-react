import React from "react";
import "./PostComponent.css"


const PostComponent = ({data}) => {
 const {user, content, image, date} = data;
 const {name, photo, nickname} = user; 
 return (
   <div className='post'>
     <img src={photo} alt='' className='photo'></img>
     <div>
 <div className='header'>{name} <span> {nickname} {date}</span></div>
 <div className='content'>{content}</div>
 <img src={image} alt='' className='image'></img>
     </div>
   </div>
 )
}

export default PostComponent;