import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    setProfile(`My name is: ${name}`);
    console.log(name);
  }, [name]);

  return (
    <div className="m-3 py-2 bg-yellow-200 rounded-lg">
      <p className="text-xl pl-4 mb-2">Input name: {name}</p>
      <p className="text-xl pl-4 mb-2">Output profile: {profile}</p>
      <input
        type="text"
        className="border border-black rounded-lg w-64 h-8 ml-4 mb-2"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Effect2;
