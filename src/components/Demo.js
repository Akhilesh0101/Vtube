import React, { useMemo, useState } from "react";
import { findPrime } from "./utils/helper";

const Demo = () => {
  const [text, setText] = useState();
  const [isDark, setisDark]= useState(false);
 
 
  
  const prime = useMemo(()=>findPrime(text),[text]);
//  const prime= findPrime(text);
  
  return (
    <div  className={"border border-black w-[400px] h-[400px]  "+(isDark && "bg-gray-900")}>
      <input className="border border-black ml-2" 
      onChange={(e)=>setText(e.target.value)}
      type="text" value={text} />
      <button
    //   onClick={(e)=>setText(e.target.value)}
      className="px-2 m-2 bg-gray-400">Calculate</button>
      <button  onClick={()=>setisDark(!isDark) } className="p-2 m-2 rounded-full bg-green-300  "
       
      >Toggle</button>
      <div>
        <h1 className="font-bold ml-2 text-xl">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
