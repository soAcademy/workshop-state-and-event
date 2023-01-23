import React from "react";

function Event7() {
  const handleReset = (e) => {
    console.log(e);
  };
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      tel: e.target[1].value,
      mail: e.target[2].value,
    };
    console.log(data); // log to show to browser
  };
  return (
    <>
      {/* structure zone */}
      <form
        className="m-6 p-5 bg-yellow-300 shadow-lg rounded-[20px] border-4 border-green-600"
        onSubmit={(event) => submitData(event)}
        onReset={(event) => handleReset(event)}
        // การเรียกใช้งาน submit()
      >
        <div>
          <input
            className="h-12 border border-green-600 mt-2 p-2 rounded-[10px]"
            placeholder="ชื่อ"
            id="name"
            required //*
            //ก้อนแรกที่ตัว target หาเจอ โดยผ่าน index การวางของ jsx
          />
        </div>
        <div>
          <input
            className="h-12 border border-green-600 mt-2 p-2 rounded-[10px]"
            placeholder="tel"
            id="tel"
            required
          />
        </div>
        <div>
          <input
            className="h-12 border border-green-600 mt-2 p-2 rounded-[10px]"
            placeholder="email"
            id="mail"
            required
          />
        </div>
        <button className="bg-green-600 border-3 shadow-lg p-4 -2 mt-4 text-white rounded-[10px] ">
          Submit
        </button>
        <button className="bg-yellow-300 p-4" type="reset">
          Clear
        </button>
      </form>
    </>
  );
}

export default Event7;
