import React from "react";

const Event7 = () => {
  const submitData = (e) => {
    // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    e.preventDefault();
    const data = {
      name: e.target["name"].value,
      tel: e.target["tel"].value,
      email: e.target["email"].value,
      // key ข้อมูลห้ามซ้ำ
      // email2: e.target["email"].value, 
    };
    console.log(data);
  };

  return (
    <form className="m-2 bg-blue-100" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          placeholder="ชื่อ"
          id="name"
          required
        />
      </div>
      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          placeholder="tel"
          id="tel"
        />
      </div>
      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          placeholder="email"
          id="email"
        />
      </div>
      <button className="bg-red-300 p-4" type="submit">
        Submit
      </button>
      <button className="bg-yellow-300 p-4" type="reset">
        Clear
      </button>
    </form>
  );
};

export default Event7;
