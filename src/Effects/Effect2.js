import React from "react";
import { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("boeing");
  const [profile, setProfile] = useState("my name is boeing");

  useEffect(() => {
    setProfile(`My name is ${name}`);
  }, [name]);
  //tricker on name and then render.

  return (
    <div className="border-2 border-sky-500 p-3 w-1/2 rounded-[30px] mt-4 shadow-md">
      <h1 className="text-green-500">Name:{name}</h1>
      <h1>Profile:{profile}</h1>
      <input
        className="bg-sky-500 rounded-[20px] border-2 border-black"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Effect2;
