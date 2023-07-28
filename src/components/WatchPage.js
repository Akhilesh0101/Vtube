import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer, { commentsData } from "./CommentContainer";
import { Comment } from "./CommentContainer";
import LiveChat from "./LiveChat";
import VideoDetailContainer from "./VideoDetailContainer";
import SuggestVideoContainer from "./SuggestVideoContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const[liveChat , setLiveChat] = useState(false)

  const dispath = useDispatch();

  useEffect(() => {
    dispath(closeMenu());
  }, []);
  return (
    <div className="ml-12 mt-3 ">  
        <div className="flex   ">
      
        <div className="flex flex-col  ">
          <div>
            <iframe
              width="1000"
              height="550"
              className="ml-2  shadow-lg"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <VideoDetailContainer params={searchParams} />
          </div>
        </div>
       
        <div className="w-full">
        <div className="flex justify-between mb-6 shadow-md ">
          <button
          onClick={()=>setLiveChat(!liveChat)}
          className="p-2 rounded-md bg-gray-200 font-bold">LiveChat</button>
          <button
          onClick={()=>setLiveChat(!liveChat)}
          className="p-2 rounded-md bg-gray-200 font-bold">VideoSuggestion</button>
          </div>
       
          {liveChat? <LiveChat/> :   <SuggestVideoContainer params={searchParams} />}
        </div>
      </div>
      </div>

    
  );
};

export default WatchPage;
