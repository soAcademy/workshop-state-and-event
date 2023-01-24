import React, { useState } from "react";

const State7 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="">
      <button
        className=" p-2 bg-red-200 rounded-lg"
        onClick={() => setToggle(!toggle)}
      >
        Menu
      </button>

      {toggle && (
        <div className="rounded-lg ml-3 py-1 bg-purple-200 w-1/6">
          <ul>
            <li className="rounded-lg bg-purple-300 p-1 mx-1 mb-1"><a href="#">item 1</a></li>
            <li className="rounded-lg bg-purple-300 p-1 mx-1 mb-1"><a href="#">item 2</a></li>
            <li className="rounded-lg bg-purple-300 p-1 mx-1 mb-1"><a href="#">item 3</a></li>
            <li className="rounded-lg bg-purple-300 p-1 mx-1"><a href="#">item 4</a></li>
          </ul>
        </div>
      )}


      {!toggle && (
        <p>Please select something!</p>
      )}


      <button onClick={()=>{
        debugger
        if (toggle) {
          alert('yeah')
        }
        if (!toggle) {
          alert('boo')
        }
      }}>
        check
      </button>
    </div>
  );
};

export default State7;
