import React, { useState } from "react";

const State5 = () => {
  const [customer, setCustomer] = useState({
    name: "Ball",
    location: "Suratthani",
  });

  return (
    <div className="bg-gradient-to-r 
    from-green-500 to-yellow-500">
      <div>{JSON.stringify(customer)}</div>
      <div>
        <button
          className="p-4 bg-pink-200 rounded-lg"
          onClick={() => setCustomer({ name: "Bank", location: "Songkhal" })}
        >
          Change Customer
        </button>
      </div>
    </div>
  );
};
export default State5;