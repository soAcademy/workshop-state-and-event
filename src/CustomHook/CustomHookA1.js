import React, { useState } from "react";

const useTitle = (defaultText) => {
  const [title, setTitle] = useState(defaultText);
// ส่งพารามิเตอร์ไปใน useState(defaultText) ตัว defaultText
  return {
    title,
    setTitle,
  };
};

const CustomHookA1 = () => {
  const { title, setTitle } = useTitle("Bin");

  return (
    <div className="bg-yellow-200">
      <p>{title}</p>
      <p>
        <button className="p-4 bg-green-200 rounded-lg" onClick={() => setTitle("Jam")}>
          Change Title
        </button>
      </p>
    </div>
  );
};

export default CustomHookA1;


// const CustomHookA1 = () => {
//   const [title, setTitle] = useState("Bin");

//   return (
//     <div className="bg-red-200" >
//       <p>{title}</p>
//       <p>
//         <button className="p-4 bg-blue-200" onClick={() => setTitle("Jam")} >
//         Change Title
//         </button>
//       </p>
//     </div>
//   );
// };

// export default CustomHookA1;