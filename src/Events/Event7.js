import React from "react";

const Event7 = () => {
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      name: e.target[0].value,
      tel: e.target[1].value,
      email: e.target[2].value,
    };
    console.log(data);
  };

  return (
    <form className="m-2 bg-yellow-200" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="m-2 h-16 bg-pink-300 border border-black"
          placeholder="Name"
          id="name"
          required
        />
      </div>
      <div>
        <input
          className="m-2 h-16 bg-pink-300 border border-black"
          placeholder="Tel"
          id="tel"
          required
        />
      </div>
      <div>
        <input
          className="m-2 h-16 bg-pink-300 border border-black"
          placeholder="Email"
          id="email"
          required
        />
      </div>
      <button className="mt-2 w-16 mx-3 bg-blue-100 border border-black">
        Submit
      </button>
    </form>
  );
};

export default Event7;
