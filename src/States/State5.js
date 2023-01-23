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
    <div className="flex flex-col w-[276px] items-center bg-gray-300 m-2 rounded-lg p-2">
      <p>State5 - Change Customer State</p>
      <button onClick={changeState} className="bg-gray-400 p-2 rounded-lg my-2">Change State</button>
      <div className="text-red-600 border-2 rounded-lg p-2 w-2/3 flex justify-center">{customer.name} {customer.location}</div>
    </div>
  );
};

export default State5;
