import React from 'react'

const ChatMessage = ({name, message}) => {

  
  return (
    <div className='flex items-center p-2 border-1 shadow-sm '>
         <div>
        <img
          className="h-6 col-span-1"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
          alt="user-icon"
        />
      </div>
      <div className='flex' >
      <p className='font-bold mr-3 ml-2 '>{name}</p>
      <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage