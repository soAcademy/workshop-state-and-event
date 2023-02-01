import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Bin");
  const [profile, setProfile] = useState("My name is Bin");

  useEffect(() => {
    setProfile(`Hello My name is ${name}`);
  }, [name]);

  return (
    <>
      <p>Name: {name}</p>
      <p>profile: {profile}</p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Effect2;
