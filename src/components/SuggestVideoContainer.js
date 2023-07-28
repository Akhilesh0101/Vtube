import React, { useEffect, useState } from 'react'
import { SUGGESTED_VIDEO_LIST_API_URL } from './utils/constant'
import SuggestVideo from './SuggestVideo'
import { Link } from 'react-router-dom'
import  { ShimmarForSuggestionVideo } from './Shimmar'


const SuggestVideoContainer = ({params}) => {
    const [suggestVideo, setSuggestVideo] = useState([])
    const getSuggestVideo = async()=>{
         const data = await fetch(SUGGESTED_VIDEO_LIST_API_URL+params.get("v"));
         const json = await data.json();
         setSuggestVideo(json.items)
         console.log(json)
    }

    useEffect(()=>{
        getSuggestVideo()
    },[])
    if (!suggestVideo) return null;
  return (
 
    <div className='flex flex-col gap-4 flex-wrap'>
    
    { suggestVideo.length > 0 ? (
      suggestVideo.map((suggestVideo) => (
        <div 
        className=''
        key={suggestVideo.id}><Link to={"/watch?v="+suggestVideo.id.videoId}><SuggestVideo info={suggestVideo} /></Link></div>
      ))
    ) : (
      < ShimmarForSuggestionVideo/>
    )}
  </div>
  )
}

export default SuggestVideoContainer