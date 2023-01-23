import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Poom",
    location: "Bangkok",
  });

  return (
    <div className="bg-red-200">
      <p>{JSON.stringify(customer)}</p>
      <p>
        <button className="p-4 bg-blue-200" onClick={() => setCustomer({name:"Jam", location: "Nonthaburi"})}>
          Change Customer
        </button>
      </p>
    </div>
  );
};

export default State5;
