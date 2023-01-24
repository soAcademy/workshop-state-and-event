import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Ball");
  const [profile, setProfile] = useState("My name is Ball");

  useEffect(() => {
    setProfile(`My name is ${name}`);
  }, [name]);

  return (
    <>
      <p>Name: {name}</p>
      <p>profile: {profile}</p>
      <input
        className="border border-black bg-green-400 w-64 rounded-lg"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Effect2;
