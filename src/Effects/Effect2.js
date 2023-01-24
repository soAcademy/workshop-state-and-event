import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Cake");
  const [profile, setProfile] = useState("Cake");

  useEffect(() => {
    setProfile(name);
  }, [name]);

  return (
    <>
      <p>Name: {name}</p>
      <p>profile: My name is {profile}</p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Effect2;
