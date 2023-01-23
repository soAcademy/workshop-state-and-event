import { useState } from "react";

const State1 = () => {
  const initialCustomer = { name: "Bin", location: "Bangkok" };
  const [customer, setCustomer] = useState(initialCustomer);
  return (
    <>
      <div>{JSON.stringify(customer)}</div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCustomer({ name: "Jam", location: "Nonthaburi" })}
      >
        Set Customer
      </button>
    </>
  );
};

export default State1;
