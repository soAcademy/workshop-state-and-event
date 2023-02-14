const CurrencyConverter1 = () => {
  
  return (
    <div>
      <div className="bg-neutral-300 w-1/2 m-auto mt-12">
        <h1 className="text-center p-2">Currency Converter</h1>
        <div className="grid grid-cols-3 space-x-4 p-4">
          <div>
            <h2>Amount</h2>
            <input type="text" className="border-black border-3" />
          </div>
          <div>
            <h2>Convert From</h2>
            <input type="text" className="border-black border-3" />
          </div>
          <div>
            <h2>Convert To</h2>
            <input type="text" className="border-black border-3 right-2" />
          </div>
        </div>
        <div className="text-center">
          <button className="bg-yellow-400 rounded-lg w-1/3 p-4 mb-5">
            CALCULATE
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="font-bold text-2xl">Exchange Rates History</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 day</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          <div className="w-1/2">
            <div>7 days</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 month</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          <div className="w-1/2">
            <div>6 months</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter1;
