import { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Bin",
    location: "Bangkok",
  });
  const changeState = () => {
    customer.name === "Bin" ? setCustomer({
      name: "Jam",
      location: "Nonthaburi",
    })
    : setCustomer({
      name: "Bin",
      location: "Bangkok"})
  };
  return (
    <div className="flex flex-col w-[330px] items-center bg-gray-300 m-2 rounded-lg p-2">
      <p>State5 - Change Customer State</p>
      <button onClick={changeState} className="bg-gray-400 p-2 rounded-lg my-2 font-bold shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500">Change State</button>
      <div className="text-red-600 border-2 rounded-lg p-2 w-fit flex justify-center">{JSON.stringify(customer)}</div>
    </div>
  );
};

export default State5;
