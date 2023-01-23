import React from "react";

const Event7 = () => {
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      tel: e.target[1].value,
      email: e.target[2].value,
    };
  };
  return (
    <form className="bg-blue-200 ml-2" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="border border-3 border-red-200 hover:bg-green-200 m-2"
          placeholder="Name"
          id="name"
          required
        />
      </div>
      <div>
        <input
          className="border border-3 border-red-200 hover:bg-green-200 m-2"
          placeholder="tel"
          id="tel"
        />
      </div>
      <div>
        <input
          className="border border-3 border-red-200 hover:bg-green-200 m-2"
          placeholder="Email"
          id="email"
        />
      </div>
      <button className="rounded-lg bg-red-500 p-2 m-2">Submit</button>
    </form>
  );
};
export default Event7;
