// import React, { useState, useEffect } from "react";

// const Effect2 = () => {
//   const [name, setName] = useState("");

//   const [profile, setProfile1] = useState("");

//   useEffect(() => {
//     setName(`Nickname is ${profile}`);
    // setProfile1(`My name is ${profile}`);
  // }, [profile]);

  // useEffect(() => {
  //   setProfile1(`My name is ${profile}`);
  // }, [ name]);

// "BIN"
// "Nickname is Bin"
// "Nickname is (Nickname is Bin)"
// "Nickname is Nickname is (Nickname is Bin)"
//   return (
//     <>
//       <p>First Name: {name}</p>
//       <input
//         className="border border-black bg-yellow-200 w-64"
//         onChange={(e) => setName(e.target.value)}
//       />  


//       <p>Last Name: {profile}</p>
//       <input
//         className="border border-black bg-yellow-200 w-64"
//         onChange={(e) => setProfile1(e.target.value)}
//       />
//     </>
//   );
// };
// export default Effect2;


import React, { useState, useEffect } from "react";

const Effect2 = () => {
  const [name, setName] = useState("Bond");
  const [profile, setProfile] = useState("My name is Bond");

  useEffect(() => {
    setProfile(`My name is ${name}`);
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

