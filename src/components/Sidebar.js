import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MdHomeFilled,

  MdOutlineMusicNote,
 
  MdComputer,
  MdShoppingCart,
  MdSportsCricket,
  MdSportsHockey,
  MdOutlineTrendingUp,
  MdNewspaper,
  MdLiveTv
} from "react-icons/md";
import {RiReactjsFill, RiFootballLine} from "react-icons/ri";
import {SiJavascript} from "react-icons/si"
import {GrYoga} from "react-icons/gr";
import { BsCameraReels, BsCodeSquare ,BsEmojiLaughing} from "react-icons/bs";

import { RiMovie2Fill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import MyContext from "./utils/searchTextContext";

const SideBar = () => {
  const navigate = useNavigate();
  const { text, setText } = useContext(MyContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  if (!isMenuOpen) return null;

  return (
    <div className="border bg-white rounded-lg  ">
      {/* List 1 */}
      <ul className="border py-3">
        <Link to="/">
          <li className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdHomeFilled />
            <span className="pl-3"> Home</span>
          </li>
        </Link>
        <li
          onClick={(e) => {
            const searchTerm = "shorts";
            setText(searchTerm);
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <BsCameraReels />
          <span className="pl-3">Shorts</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Trending";
            setText("Trending");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdOutlineTrendingUp />
          <span className="pl-3">Trending</span>
        </li>
      </ul>

      {/* list2 */}
      <ul>
        <h1 className=" px-6 text-lg font-medium p-2 ">Explore</h1>
        <li
          onClick={(e) => {
            const searchTerm = "News";
            setText("News");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdNewspaper />
          <span className="pl-3">News</span>{" "}
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Reactjs";
            setText("Reactjs");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <RiReactjsFill />
          <span className="pl-3"> Reactjs</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Live";
            setText("Live");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdLiveTv />
          <span className="pl-3"> Live</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Coding";
            setText("Coding");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <BsCodeSquare />
          <span className="pl-3"> Coding</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Comedy";
            setText("Comedy");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <BsEmojiLaughing />
          <span className="pl-3"> Comedy</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Technology";
            setText("Technology");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdComputer />
          <span className="pl-3"> Technology</span>
        </li>
      </ul>
      {/* Explore */}
      <ul className="border pt-1">
        <li
          onClick={(e) => {
            const searchTerm = "JavaScript";
            setText("JavaScript");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <SiJavascript />
          <span className="pl-3"> JavaScript</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Shopping";
            setText("Shopping");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdShoppingCart />
          <span className="pl-3"> Shopping</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Music";
            setText("Music");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdOutlineMusicNote />
          <span className="pl-3"> Music</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Movies&Shows";
            setText("Movies&Shows");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <RiMovie2Fill />
          <span className="pl-3"> Movies&Shows</span>
        </li>
        <li onClick={(e) => {
            const searchTerm = "Hollywood";
            setText("Hollywood");
            navigate(`/search/${searchTerm}`);
          }} className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer">
          <RiMovie2Fill />
          <span className="pl-3"> Hollywood</span>
        </li>
        <li  onClick={(e) => {
             const searchTerm = "Game";
             setText("Game");
             navigate(`/search/${searchTerm}`);
          }} className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer">
          <GrGamepad />
          <span className="pl-3"> Game</span>
        </li>
      </ul>
      {/* Explore */}
      <ul className="border pt-1">
        <li
          onClick={(e) => {
            const searchTerm = "Yoga";
            setText("Yoga");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <GrYoga />
          <span className="pl-3"> Yoga</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Cricket";
            setText("Cricket");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdSportsCricket />
          <span className="pl-3"> Cricket</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Football";
            setText("Football");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <RiFootballLine />
          <span className="pl-3"> Football</span>
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "Hockey";
            setText("Hockey");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg  cursor-pointer"
        >
          <MdSportsHockey />
          <span className="pl-3"> Hockey</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
