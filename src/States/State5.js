import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Teak",
    location: "Bangkok",
  });
  return (
    <div className="bg-blue-200 h-32">
      <div className="mb-2">{JSON.stringify(customer)}</div>
      <div>
        <botton
          className="bg-green-200 rounded-lg p-2 m-2 "
          onClick={() => setCustomer({ name: "Jam", location: "London" })}
        >
          Change Customer
        </botton>
      </div>
    </div>
  );
};

export default State5;
