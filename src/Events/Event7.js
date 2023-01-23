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
    <form className="m-3 bg-violet-400" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="h-12 border-2 border-red-400 m-2"
          placeholder="Name"
          id="name"
          required
        />
      </div>
      <div>
        <input
          className="h-12 border border-green-400 m-2"
          placeholder="Telephone Number"
          id="tel"
        />
      </div>
      <div>
        <input
          className="h-12 border border-blue-400 m-2"
          placeholder="Email Address"
          id="email"
        />
      </div>
      <button type="submit" className="h-12 bg-black text-white p-4 m-2">Submit</button>
      <button type="reset" className="w-[90px] h-12 bg-black text-white p-4">Clear</button>
    </form>
  );
};

export default Event7;
