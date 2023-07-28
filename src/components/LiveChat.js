import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { generateRandomName } from "./utils/helper";
import { generateRandomMessages } from "./utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  const [sendMessage, setSendMessage] = useState();

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("api pooling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          messages: generateRandomMessages(20),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <h1 className="font-bold pl-2 shadow-lg border-black p-2">LiveChat</h1>
      <div className="border-4  h-[450px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.messages} />
        ))}
      </div>

      <form
        className="border border-gray-300  p-3   "
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("form submit", sendMessage);
          dispatch(
            addMessage({
              name: "Akhil",
              messages: sendMessage,
            })
          );
          setSendMessage("");
        }}
      >
        <input
          className="border shadow-lg p-1 pl-3 w-[270px]"
          type="text"
          value={sendMessage}
          onChange={(e) => {
            setSendMessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 ml-4 bg-gray-200">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
