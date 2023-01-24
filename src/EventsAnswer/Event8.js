import React from "react";

const Event8 = () => {
  const submitData = (e) => {
    // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    e.preventDefault();
   
    console.log(e.target.value);
  };

  return (
      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          id="image"
          type="file"
          accept="image/png, image/jpeg"
          // MIME type
          onChange={(e)=>submitData(e)}
        />
      </div>
     
  );
};

export default Event8;
