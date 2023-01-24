import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Bin");
  const [profile, setProfile] = useState("My name is Bin");
  const [address, setAddress] = useState("My Bin Address");
  

  useEffect(() => {
    setProfile(`My name is ${name}`);
    setAddress(`My ${name} address`);
  }, [name]);

  return (
    <>
      <p>Name: {name}</p>
      <p>Profile: {profile}</p>
      <p>Address: {address}</p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Effect2;
