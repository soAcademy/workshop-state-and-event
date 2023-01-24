import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Bin");
  const [profile, setProfile] = useState("My name is Bin");

  useEffect(() => {
    setProfile(`My name is ${name}`);
  }, [name]);

  return (
    <div className="bg-gray-300 rounded-lg m-2 p-2 w-fit ">
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        className="rounded-lg px-2"
      ></input>
      <p>Name : {name}</p>
      <p>Profile : {profile}</p>
    </div>
  );
};
export default Effect2;
