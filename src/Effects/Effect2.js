import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Teak");
  const [profile, setProfile] = useState("My name is Teak.");

  useEffect(() => {
    setProfile(`My name is ${name}`);
}, [name]);
  return (
    <>
      <p>{name}</p>
      <p>{profile}</p>
      <input className='bg-green-200' onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default Effect2;
