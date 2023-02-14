import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";
import Retirement from "./Retirement/Retirement";
import React, { useState } from "react";

const AppCalculator = () => {
  const [page, setPage] = useState("retire");
  return (
    <div>
      <div className="m-4 space-x-2">
        <button
          className={`rounded-lg bg-gray-200 p-2 hover:bg-gray-300 active:bg-gray-400 shadow-md ${
            page === "fx" ? "" : "pointer-events-none bg-gray-400 shadow-[inset_0_15px_15px_-15px_rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("retire")}
        >
          Retirement Plan
        </button>
        <button
          className={`rounded-lg bg-gray-200 p-2 hover:bg-gray-300 active:bg-gray-400 shadow-md ${
            page === "retire" ? "" : "pointer-events-none bg-gray-400 shadow-[inset_0_15px_15px_-15px_rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("fx")}
        >
          Currency Converter
        </button>
      </div>
      {page === "retire" && <Retirement />}
      {page === "fx" && <CurrencyConverter />}
    </div>
  );
};

export default AppCalculator;
