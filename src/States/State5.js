import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Born",
    location: "Bangkok",
  });

  return (
    <div className="bg-yellow-200">
      <div>{JSON.stringify(customer)}</div>
      <div>
        <button
          className="p-4 bg-green-200"
          onClick={() => setCustomer({ name: "Jam", location: "Nonthaburi" })}
        >
          Change customer data
        </button>
      </div>
    </div>
  );
};

export default State5;
