import React, { useEffect, useState } from 'react'
import { COMMENT_URL } from './utils/constant';
import Comment from './Comment';
import { ShimmarForComments } from './Shimmar';


const CommentContainer = ({params , comment}) => {
  //  console.log(params)
  const [commentData, setCommentData] = useState([])
 
 
   useEffect(()=>{
     Comments()
     
   },[params]);

   const Comments = async()=>{
      const data = await fetch(COMMENT_URL+params.get("v"))
      const json = await data.json()
      // console.log(json.items);
      setCommentData(json.items)
   }
   if(!commentData){
    return null;
   }

   
  const commentCount = (comment) => {
    if (comment < 1000) {
      return comment.toString();
    } else if (comment >= 1000 && comment < 1000000) {
      return (comment / 1000).toFixed(1) + "K";
    } else if (comment >= 1000000 && comment < 1000000000) {
      return (comment / 1000000).toFixed(1) + "M";
    } else if (comment >= 1000000000 && comment < 1000000000000) {
      return (comment / 1000000000).toFixed(1) + "B";
    }
  };
  return (
    <div className='w-full h-96 mt-8'> 
      <div className='flex gap-8 mb-8 ml-14'><h1>{commentCount} Comments</h1><h1 className='font-bold'>Sort by</h1></div>
      <div className='flex gap-8 ml-14'>
        <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png 
        "
        height="40px"
        width="40px"
         className='rounded-full '/>
        <input type='text' placeholder='Add a comment... '></input>
      </div>
      {commentData.length>0?
      (commentData.map((commentData)=>(
        <div key={commentData.id}>
             <Comment info={commentData}  comment={comment}/>
        </div>
           
      ))):(<ShimmarForComments/>)}
      </div>
  )
}

export default CommentContainer
