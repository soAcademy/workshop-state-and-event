import React from "react";

const Event8 = () => {
  const submitData = (e) => {
    
    e.preventDefault();  // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
   
    console.log(e.target.value);
  };

  return (
      <div>
        <input
          className="h-12 border border-green-800 mt-2"
          id="image"
          type="file"
          accept="image/png, image/jpeg" //mime type ไฟล์ PNG PG JPG 
          onChange={(e)=>submitData(e)}
        />
      </div>
     
  );
};

export default Event8;