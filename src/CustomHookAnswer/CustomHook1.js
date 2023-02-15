import React, { useState } from "react";
// 1. Pure Function
// - ฟังก์ชั่นที่ถ้าส่งค่า parameters เหมือนกันไป ไม่ว่าจะเรียกที่ไหน เมื่อไร ก็จะได้ผลลัพธ์ return ค่าเดิมเสมอ
// - const min = (x, y) => x < y ? x : y;
// 2. Component Function
// - ฟังก์ชั่นที่ render html, jsx ไม่มีการคำนวน มีหน้าที่เรียกใช้ฟังก์ชั่นอื่นๆ แล้วนำผลลัพธ์มาแสดงบน browser ให้สวยงาม
// 3. Hook Function (Side Effect)
// - ฟังก์ชั่นที่มี Side Effect เรียกแต่ละครั้งอาจได้ผลลัพธ์ไม่เหมือนกัน ต่อให้ส่งค่า parameters เดิมไปก็ตาม
// - เช่น useState, useEffect, customHook

export const CustomHook1 = () => {
  const [title, setTitle] = useState("Bin");

  return (
    <div className="bg-red-200">
      <p>{title}</p>
      <p>
        <button className="p-4 bg-blue-200" onClick={() => setTitle("Jam")}>
          Change Title
        </button>
      </p>
    </div>
  );
};

// export default CustomHook1;

// import React, { useState } from "react";

// const useTitle = (defaultText) => {
//   const [title, setTitle] = useState(defaultText);
//   return {
//     title,
//     setTitle,
//   };
// };

// const CustomHook1 = () => {
//   const { title, setTitle } = useTitle("Bin");

//   return (
//     <div className="bg-red-200">
//       <p>{title}</p>
//       <p>
//         <button className="p-4 bg-blue-200" onClick={() => setTitle("Jam")}>
//           Change Title
//         </button>
//       </p>
//     </div>
//   );
// };

// export default CustomHook1;
