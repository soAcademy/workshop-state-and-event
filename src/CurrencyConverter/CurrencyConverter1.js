const CurrencyConverter1 = () => {
  return (
    <div className="">
      <div className="mx-auto mt-8 w-1/2 bg-gray-100 p-6">
        <h1 className="text-center text-xl font-bold">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="mt-4 flex space-x-8">
            <div className="w-1/2">
              <label for="amount">จำนวน</label>
              <br />
              <input
                type="number"
                id="amount"
                name="amount"
                className="mt-2 w-full p-2"
                placeholder="30"
              ></input>
            </div>
            <div className="w-1/2">
              <label for="fromCurrency">จาก</label>
              <br />
              <input
                type="text"
                id="fromCurrency"
                name="fromCurrency"
                className="mt-2 w-full p-2"
                placeholder="THB"
              ></input>
            </div>
            <div className="w-1/2">
              <label for="toCurrency">ไป</label>
              <br />
              <input
                type="text"
                id="toCurrency"
                name="toCurrency"
                className="mt-2 w-full p-2"
                placeholder="USD"
              ></input>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-32 bg-yellow-400 p-4 text-xl font-bold hover:bg-yellow-500 active:bg-amber-400"
            >
              คำนวณ
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-8 w-1/2">
        <h2 className="text-lg font-bold">1 THB =</h2>
        <h1 className="mt-4 text-5xl font-bold">0.0249101 USD</h1>
        <h2 className="mt-4 text-lg font-bold">1 USD = 32.0190 THB</h2>
      </div>
    </div>
  );
};

export default CurrencyConverter1;
