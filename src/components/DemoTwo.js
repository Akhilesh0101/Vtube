import React, { useRef, useState } from "react";

const DemoTwo = () => {
  let x = 0;
  const[y,setY] =useState(0)
  const ref =useRef(0);

  return (
    <div className="w-96 h-96 pl-2 border border-black m-2 ">
      <div>
      <button
        onClick={() => {
          x = x + 1;
          console.log("x=" + x);
        }}
        className="p-2 m-2 bg-green-100"
      >
        Increase X
      </button>
      <span>{x}</span>
      </div>
      

      <div>
      <button
        onClick={()=>setY(y+1)}
        className="p-2 m-2 bg-green-100"
      >
        Increase y
      </button>
      <span>{y}</span>
      </div>

      <div>
      <button
        onClick={()=>{
          ref.current=ref.current+1
          console.log("ref=",ref.current)
        }}
        className="p-2 m-2 bg-green-100"
      >
        Ref y
      </button>
      <span>ref={ref.current}</span>
      </div>
    </div>

    
  );
};

export default DemoTwo;
