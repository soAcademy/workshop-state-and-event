import React from "react";

const LocalStorage4 = () => {
  const arrayData = [
    {
      name: "Bin",
      location: "Bangkok",
      age: 30,
    },
    {
      name: "Jam",
      location: "Nonthaburi",
      age: 25,
    },
    {
      name: "Ploy",
      location: "Sukhothai",
      age: 20,
    },
  ];

  console.log(JSON.stringify(arrayData));
  localStorage.setItem("arrayData", JSON.stringify(arrayData));
  //เพราะว่าในการจะเก็บของลงใน local storage storage ของนั้นจะต้องเป็น string เท่านั้น
  //จัดเก็บ และแปลงเป็น JSONstring
  console.log(localStorage.getItem("arrayData"));
  //เรียกใช้งาน
  const data = JSON.parse(localStorage.getItem("arrayData"));
  //แปลงจาก JSONstring เป็น Object แล้วเรียกใช้งาน
  console.log(data);

  return (
    <>
      {data[1].name},{data[0].location},{data[0].age}
    </>
  );
};

export default LocalStorage4;
