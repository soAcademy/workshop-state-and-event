import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Cake",
    location: "Saimai",
  });

  return (
    <div className="m-4">
      <div>{JSON.stringify(customer)}</div><br />
      <div>
        <button
          className="p-1 bg-purple-200"
          onClick={() => setCustomer({ name: "Cream", location: "Lamlukka" })}
        >
          Change Customer
        </button>
      </div>
    </div>
  );
};

export default State5;
