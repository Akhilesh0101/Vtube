import React, { useContext, useEffect } from "react";
import { SEARCH_URL } from "./utils/constant";
import SearchVideoCard from "./SearchVideoCard";
import { useState} from "react";
import {Shimmar} from "./Shimmar";
import { Link, useParams } from "react-router-dom";
import {GOOGLE_API_KEY} from "./utils/constant"
import Query from "./utils/searchTextContext";
import MyContext from "./utils/searchTextContext";
import { useSelector } from "react-redux";
import SideBar from "./Sidebar";



// const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+searchValue +"&type=video&key="+GOOGLE_API_KEY;

const SearchVideoContainer = () => {
 

  

    
  const [searchVideo, setSearchVideo] = useState([]);
  // const { text, setText } = useContext(MyContext);
  const params =useParams();
  const{text,setText} =useContext(MyContext)
 
  const getSearchVideo = async () => {
    const data = await fetch(SEARCH_URL+params.searchTerm+"&type=video&key="+GOOGLE_API_KEY);
    const json = await data.json();
    // console.log(json);
    setSearchVideo(json.items);
  };

  useEffect(() => {
    getSearchVideo();
  }, [params.searchTerm]);

  // const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

  if(!searchVideo) return null;
   
  return (searchVideo.length===0)?(<Shimmar/>) 
  :(
    <div className="flex">
      <SideBar/>
      <div className="flex  w-full flex-wrap ml-8">
      {searchVideo.map((searchVideo) => (
      
       <Link key={searchVideo.id.VideoId} to={"/watch?v="+searchVideo.id.videoId}> <SearchVideoCard info={searchVideo}  /></Link>
      
      ))} 
     </div>
    </div>
  );
};

export default SearchVideoContainer;


