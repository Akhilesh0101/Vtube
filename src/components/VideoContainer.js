import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import {Shimmar} from './Shimmar';

const VideoContainer = () => {
  

  const[videos , setVideos]= useState([])
  const[nextPageToken , setnextPageToken]  = useState("")
   
  useEffect(()=>{
   getVideos();
  },[]);

  useEffect(()=>{
    window.addEventListener("scroll",infiniteScroll, true);
    return()=>{
      window.removeEventListener("scroll",infiniteScroll, true);
    }
  },[nextPageToken]);

  const getVideos = async ()=>{
    const url = nextPageToken !== "" ? `${YOUTUBE_VIDEO_API}&pageToken=${nextPageToken}` : YOUTUBE_VIDEO_API;
    const data= await fetch(url);
    const json = await data.json();
    setnextPageToken(json?.nextPageToken);
    setVideos([...videos, ...json.items]);
  }

  const infiniteScroll = ()=>{
    if(window.innerHeight+ Math.round(document.documentElement.scrollTop)>=document.documentElement.offsetHeight - 300){
      getVideos();
    }
  }
  
  if (!videos) return null;
  return (videos.length===0)?(<Shimmar/>)
  :(
   
    <div className='flex w-full flex-wrap ml-8  '>
      {videos.map((videos)=>(
      <Link key={videos.id} to={"/watch?v="+videos.id}><VideoCard  info={videos}/>
      </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer
