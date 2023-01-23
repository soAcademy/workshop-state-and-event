import React from "react";

const Event8 = () => {
  const submitData = (e) => {
    e.preventDefault();
   
    console.log(e.target.value);
  };

  return (
      <div>
        <input
          className="h-12 border border-red-200 m-2"
          id="image"
          type="file"
          accept="image/png, image/jpeg"
          onChange={submitData}
        />
      </div>
     
  );
};

export default Event8;
