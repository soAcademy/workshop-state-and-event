import React, { useState } from "react";

// const CustomHook1 = () => {
//   const [title, setTitle] = useState("First");

//   return (
//     <div className="p-4 w-full">
//       <div className="bg-pink-100 w-36">
//         <p className="text-center">{title}</p>
//         <div
//           className="p-4 bg-pink-300 w-36"
//           onClick={() => setTitle("Set First")}
//         >
//           <button>Change Title</button>
//         </div>
//       </div>
//     </div>
//   );
// };

const useTitle = (defaultText) => {
  const [title, setTitle] = useState(defaultText);
  return {
    title: title,
    setTitle: setTitle,
  };
};

const CustomHook1 = () => {
  const { title, setTitle } = useTitle("First");

  return (
    <div className="p-4 w-full">
      <div className="bg-pink-100 w-36 p-4">
        <p className="text-center">{title}</p>
      </div>
      <div>
        <button
          onClick={() => setTitle("CustomHook")}
          className="p-4 bg-pink-300 w-36"
        >
          Change Title
        </button>
      </div>
    </div>
  );
};

export default CustomHook1;
