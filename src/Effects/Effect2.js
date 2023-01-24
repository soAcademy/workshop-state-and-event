import React from "react";
import { useState, useEffect } from "react";

// 2. สร้างตัวแปร useState 2 ตัว คือ name และ profile โดย name มีค่าเริ่มต้น คือ Bin และ profile มีค่าเริ่มต้นคือ My name is Bin จากนั้นสร้าง input ให้กรอกชื่อ โดยจะเปลี่ยนแปลงค่า name และ profile เป็น `My name is ${name}` โดยใช้ useEffect

const Effect2 = () => {
  const [name, setName] = useState("boeing");
  const [profile, setProfile] = useState("my name is boeing");

  useEffect(() => {
    // setProfile(`My name is ${name}`);
    console.log("work!");
  }, [profile]);
  console.log(name);
  //tricker on name and then render.
  //listen only the thing in the dependency.
  console.count("render");
  return (
    <div className="border-2 border-sky-500 p-3 w-1/2 rounded-[30px] mt-4 shadow-md">
      <h1 className="text-green-500">Name:{name}</h1>
      <h1>Profile:{profile}</h1>
      <input
        className="bg-sky-500 rounded-[20px] border-2 border-black"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Effect2;
