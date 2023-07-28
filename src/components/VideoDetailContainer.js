import React, { useEffect, useState } from 'react'
import { VIDEO_INFO_API_URL } from './utils/constant'
import VideoDetail from './VideoDetail'
import { ShimmarForVideoDetail } from './Shimmar'

const VideoDetailContainer = ({params}) => {
 
    const[videoDetail , setVideoDetail] = useState("")
     const getDetail = async()=>{
        const data = await fetch(VIDEO_INFO_API_URL+params.get("v"))
        const json = await data.json()
        setVideoDetail(json.items)
        // console.log(json.items)
     }

         
    useEffect(()=>{
      getDetail()
    },[params])
  return (
    <div>
      { videoDetail?   <VideoDetail info={videoDetail} params={params}/>:(<ShimmarForVideoDetail/>)}
    </div>
  )
}

export default VideoDetailContainer