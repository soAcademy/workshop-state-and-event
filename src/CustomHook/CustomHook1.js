import React, { useState } from "react";

const useTitle = (a) => {
  const [title, setTitle] = useState(a);
  return {
    title,
    setTitle,
  };
};

const CustomHook1 = () => {
  const { title, setTitle } = useTitle("Cake");

  return (
    <div className="bg-gray-200">
      <p>{title}</p>
      <p>
        <button className="p-4 border border-gray-700" onClick={() => setTitle("Kunlanis")}>
          Change Title
        </button>
      </p>
    </div>
  );
};

export default CustomHook1;
