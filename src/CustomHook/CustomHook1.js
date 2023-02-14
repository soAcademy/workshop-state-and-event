import React, { useState } from "react";


  const useTitle = (defaultTitle) => {
    const [title, setTitle] = useState(defaultTitle);
    return {
      title,
      setTitle,
    };
  };


const CustomHook1 = () => {
  const { title, setTitle } = useTitle("Dew");

  return (
    <>
      <div className="bg-blue-300 mx-auto ">
        <p>{title}</p>
        <button className="bg-blue-500 p-2" onClick={() => setTitle("Mony")}>
          Change title
        </button>
      </div>
    </>
  );
};
export default CustomHook1;
