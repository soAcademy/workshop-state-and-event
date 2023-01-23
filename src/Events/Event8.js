import React from "react";

const Event8 = () => {
  const submitData = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        className=" bg-blue-200 rounded-lg h-12 border border-3 border-green-300 mt-2 ml-2 pl-2 pt-2"
        id="image"
        type="file"
        accept="image/png, image/jpg"
        OnChange={(e) => submitData(e)}
      />
    </div>
  );
};
export default Event8;
