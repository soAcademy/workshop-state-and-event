import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Bin");
  const [profile, setProfile] = useState("My name is Bin");

  useEffect(()=> {
    setProfile(`My name is ${name}`)
  },[name])

  return (
    <div className="m-2 p-2 bg-gray-300 rounded-lg w-fit">
      <input type='text' placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} className="rounded-lg"></input>
      name : {name} profile : {profile}
    </div>
  );
};

export default Effect2;