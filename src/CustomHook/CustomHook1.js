import { useState } from "react";

const useTitle = (defaultText) => {
  const [title, setTitle] = useState(defaultText);
  return { title, setTitle };
};

const CustomHook1 = () => {
  // const [title, setTitle] = useState("Bin");
  const { title, setTitle } = useTitle("Bin");

  return (
    <>
      <div>{title}</div>
      <button
        type="button"
        className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setTitle("Jam")}
      >
        Set Title
      </button>
    </>
  );
};

export default CustomHook1;
