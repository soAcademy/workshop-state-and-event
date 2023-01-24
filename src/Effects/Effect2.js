import { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Keng");
  const [profile, setProfile] = useState("My name is Keng");

  useEffect(() => {
    setProfile(`My name is ${name}`);
  }, [name]);

  return (
    <>
      <div>Name: {name}</div>
      <div>Profile: {profile}</div>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=""
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Effect2;
