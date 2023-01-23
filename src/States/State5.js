import React, { useState } from "react";

const State5 = () => {
  const [customers, setCustomers] = useState({
    name: "Bin",
    location: "Bangkok",
  });

  return (
    <div className="m-3 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-lg">
      <h1 className="text-2xl p-2 mt-2">{JSON.stringify(customers)}</h1>
      <button
        onClick={() => setCustomers({ name: "Jam", location: "Nonthaburi" })}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Change Customer
      </button>
      <button
        onClick={() => setCustomers({name: "Bin", location: "Bangkok"})}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Change Customer
      </button>
    </div>
  );
};

export default State5;