import React from 'react'

const SearchVideoCard = ({info}) => {
  // console.log("hey");
  const {snippet} = info;
  // console.log(info);
  const{channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 m-2 shadow-lg  w-72'>
      <img src={thumbnails.medium.url} alt="thumbnail"/>
      <ul>
        <li>{channelTitle}</li>
        <li>{title}</li>
      </ul>

    </div>
  )
}

export default SearchVideoCard