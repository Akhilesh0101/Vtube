
 

import React, { useContext, useEffect, useState } from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./utils/constant";
import { addCache } from "./utils/searchSlice";
import VideoContainer from "./VideoContainer";
import SearchVideoContainer from "./SearchVideoContainer";
import { Link, useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import { addResult } from "./utils/searchResultSlice";
import Query from "./utils/searchTextContext";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Head = () => {
  const { transcript,  listening,resetTranscript } = useSpeechRecognition();
  // if(!browserSupportsSpeechRecognition)
  //     return null;
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState([]);
  const [hideSuggestion, setHideSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.searchSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setShowSuggestion(json[1]);
    dispatch(
      addCache({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery(searchQuery);
    }
  };

  if(transcript){
    // setSearchQuery(transcript)
    navigate(`/search/${transcript}`)
    
  }
  // console.log(searchQuery)''

  // console.log(clickHandler);
 
  return (
    
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="hamburger"
        />
        <a href="/">
          <img
            className="h-8 ml-6 rounded-full"
            src="https://s1.mzstatic.com/us/r30/Purple1/v4/df/3c/f4/df3cf4dd-3d2f-2c34-8767-08715f9566f2/mzl.maqdheni.png"
            alt="youtube logo"
            
            width="70px"
          />
        </a>
      </div>

      <div className="col-span-10 px-10 ">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(prevSearchQuery => e.target.value)}

          onFocus={() => setHideSuggestion(true)}
          onBlur={() => setHideSuggestion(false)}
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 rounded-l-full p-2 "
        />

        <button
        className=" rounded-r-full border-[1px] border-gray-400 px-4 py-2 hover:bg-gray-200 "
          onClick={(e) => {
            handleSearch(e);
          }}
        >
         🔍
        </button>

        
    
      <button className="p-[8px] ml-6 rounded-full bg-gray-200 hover:bg-gray-300" onClick={SpeechRecognition.startListening}>🎙️</button>
  
    
    

      {hideSuggestion && (
  <ul className="fixed w-[33rem] py-2 px-2 bg-white shadow-lg rounded-lg border border-gray-200">
    {showSuggestion.map((suggestion, index) => (
      <li
        key={index}
        className="border-bottom p-1.5 shadow-sm hover:bg-slate-100"
      >
        🔍 {suggestion}
      </li>
    ))}
  </ul>
)}

      </div>

      <div>
      
        <img
        // onClick={()=>navigate("/signin")}
          className="h-8 col-span-1"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
