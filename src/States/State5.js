import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Bin",
    location: "Bangkok",
  });

  return (
    <div className="bg-yellow-200">
      <div>{JSON.stringify(customer)}</div>
      <div>
        <button
          className="p-4 bg-green-200 mt-5"
          onClick={() => setCustomer({ name: "Jam", location: "Nonthaburi" })}
        >
          Change Customer
        </button>

        <button
          className="p-4 bg-green-200 ml-5"
          onClick={() => setCustomer({ name: "Bin", location: "Bangkok" })}
        >
          Default
        </button>

      </div>
    </div>
  );
};

export default State5;
