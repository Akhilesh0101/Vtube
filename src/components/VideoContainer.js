import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import {Shimmar} from './Shimmar';

const VideoContainer = () => {
  

  const[videos , setVideos]= useState([])
   
  useEffect(()=>{
   getVideos();
  },[]);


  const getVideos = async ()=>{
    const data= await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    
    setVideos(json.items)
  }
  
  if (!videos) return null;
  return (videos.length===0)?(<Shimmar/>)
  :(
   
    <div className='flex w-full flex-wrap ml-8 '>
      {videos.map((videos)=>(
      <Link key={videos.id} to={"/watch?v="+videos.id}><VideoCard  info={videos}/>
      </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer