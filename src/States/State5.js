import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Bin",
    location: "Bangkok",
  });

  return (
    <div className="bg-yellow-200">
      <div> {JSON.stringify(customer)}</div>
     <div>
        <button
          className="p-4 bg-green-200"
          onClick={() => setCustomer({ name: "Jan", location: "Nonthaburi" })}
        >
          Change Customer
        </button>
      </div>
    </div>
  );
};

export default State5;
