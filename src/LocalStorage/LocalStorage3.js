import React from "react";

const LocalStorage3 = () => {
  const objectData = {
    name: "boeing",
    location: "Bangkok",
    age: 7,
  };

  console.log(JSON.stringify(objectData));
  localStorage.setItem("objectData", JSON.stringify(objectData));

  console.log(JSON.stringify(localStorage));

  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);

  return (
    <>
      {data.name},{data.location},{data.age}
    </>
  );
};

export default LocalStorage3;
