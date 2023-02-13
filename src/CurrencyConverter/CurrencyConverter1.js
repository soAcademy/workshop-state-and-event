import react from "react";
const CurrencyConverter1 = () => {
  return (
    <div className="">
      <div className="1/2 mx-auto bg-gray-200 mt-6 p-4">
        <h1 className="flex mt-4 space-x-8">
          <div className="w-1/3">
            <label>จำนวน</label>
            <br />
            <input
              type="number"
              name="amount"
              className="p-2 w-full mt-2"
              placeholder="1"
            ></input>
          </div>
        </h1>
      </div>
    </div>
  );
};
export default CurrencyConverter1;
