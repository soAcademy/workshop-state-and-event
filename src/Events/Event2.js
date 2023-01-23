import React from "react";
const Event2 = ()=>{
  const helllWorld=()=>console.log("Hello world!");

return(
  <div className="bg-red-200" onClick={()=>helllWorld()}>Button2</div>

);
};
export default Event2;
