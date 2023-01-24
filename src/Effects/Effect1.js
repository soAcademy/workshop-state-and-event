import React, { useState,useEffect } from "react";
// component 1
const RenderComponent = (props) => <div>Count = {props.count}</div>;
// component 2
const PlusComponent = ({ count, setCount }) => (
  <div>
    <button
      className="p-4 m-1 bg-blue-200"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Count --
    </button>
  </div>
);
// component 3
const MinusComponent = ({ count, setCount }) => (
  <div>
    <button
      className="p-4 m-1 bg-blue-200"
      onClick={() => {
        setCount(count - 1);
      }}
    >
      Count --
    </button>
  </div>
);

const Effect1 = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
    //write code to call when state changes
     document.title = `Counter ${count}`;
    //  return () => {
    //    write code to clean up 
    //  }
   }, [count])
   
  return (
<div className="bg-red-200">
    {/* component 1 */}
    <RenderComponent count={count} />
    {/* component 2 */}
    <PlusComponent count={count} setCount={setCount}/>
    {/* component 3 */}
    <MinusComponent count={count} setCount={setCount}/>
    </div>
  );
};

export default Effect1;