import React from "react";
import { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "boeing",
    location: "wonderland",
  });
  return (
    <div className="bg-gray-200 mt-5 w-1/2">
      <div>{JSON.stringify(customer)}</div>
      <div>
        <button
          className="p-4 bg-green-600 text-white"
          onClick={() => setCustomer({ name: "mike", location: "Hell" })}
        >
          Change Customer
        </button>
      </div>
    </div>
  );
};

export default State5;
