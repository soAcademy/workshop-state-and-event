import React from "react";

const Event7 = () => {
  const submitData = (e) => {
    e.preventDefault(); // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    const data = {
      name: e.target[0].value,
      tel: e.target[1].value,
      email: e.target[2].value
    }
    console.log(data);
  };

  return (
    <form className="m-2 bg-green-100" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="h-12 border border-yellow-200 mt-2 ml-2 rounded-xl"
          placeholder="Firstname Lastname"
          id="name"
          required
        />
      </div>
      <div>
        <input
          className="h-12 border border-yellow-200 mt-2 ml-2 rounded-xl"
          placeholder="000-000-0000"
          id="tel"
        />
      </div>
      <div>
        <input
          className="h-12 border border-yellow-200 mt-2 ml-2 rounded-xl"
          placeholder="aaa@email.com"
          id="email"
        />
      </div>
      <button className="bg-green-300 p-4 my-2 ml-2 rounded-xl" type="submit">Submit</button>
      <button className="bg-red-300 p-4 my-2 ml-2 rounded-xl" type="reset">reset</button>
    </form>
  );
};

export default Event7;
