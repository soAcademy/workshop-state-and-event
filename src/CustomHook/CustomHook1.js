import React, { useState } from "react";

// const CustomHook1 = () => {
//   const [title, setTitle] = useState("boeing");

//   return (
//     <div className="bg-red-200">
//       <p>{title}</p>
//       <p>
//         <button className="p-4 bg-blue-200" onClick={() => setTitle("mike")}>
//           Change Title
//         </button>
//       </p>
//     </div>
//   );
// };

// export default CustomHook1;

// refactoring with  custom hook
const useTitle = (defaultText) => {
  const [title, setTitle] = useState(defaultText);
  return {
    title,
    setTitle,
  };
};

const CustomHook1 = () => {
  const { title, setTitle } = useTitle("Bin");

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

export default CustomHook1;
