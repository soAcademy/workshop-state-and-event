import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Born");
  const [profile, setProfile] = useState("My name is Born");

  useEffect(() => {
    setProfile(`My name is ${name}`);
  }, [name]);

  return (
    <>
      <div>{name}</div>
      <div>{profile}</div>
      <input
        className="border border-red-200 bg-yellow-300"
        onChange={(e) => setName(e.target.value)}
      ></input>
    </>
  );
};

export default Effect2;
