const CurrencyConverter1 = () => {
  return (
    <>
      <div className="p-5 font-kanit">
        <div className="flex text-center">
        <div className="text-center text-2xl font-bold p-2 ">
          คำนวนอัตราแลกเปลี่ยน
        </div>
        <div><img className="h-[50px]" src="doreamon555.png"/></div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-300 w-1/2 mx-auto rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-3 space-x-2 p-2">
              <div className="p-2">
                <div className="font-bold ">จำนวน</div>
                <div>
                  <input className="w-full p-2" placeholder="1" />
                </div>
              </div>
              <div className="p-2">
                <div className="font-bold ">จาก</div>
                <div>
                  <input className="w-full p-2" placeholder="THB" />
                </div>
              </div>
              <div className="p-2 ">
                <div className="font-bold ">ไป</div>
                <div>
                  <input className="w-full p-2" placeholder="USD" />
                </div>
              </div>
            </div>
            <div className="text-center p-2">
              <button
                className="bg-gradient-to-r from-yellow-500 to-yellow-300 p-2 w-1/3 text-xl font-bold rounded-lg  shadow-lg "
                type="submit"
              >
                คำนวน
              </button>
            </div>
          </form>
          <div className="p-2">
            <div>1 THB = </div>
            <div className="font-bold text-xl">0.0249101 USD</div>
            <div>1 USD = 32.0190 THB</div>

          </div>
        </div>
        <div className="flex flex-col  w-1/2 mx-auto mt-6">
          <div>
        <h2 className="font-bold text-left text-xl">
          อัตราแลกเปลี่ยนย้อนหลัง
        </h2>
        </div>
        <div className="grid grid-cols-2 w-full  mx-auto">
          <div className="w-full p-2">
            <div>1 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB</div>
          </div>
          <div className="w-full p-2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB</div>
          </div>
          <div className="w-full p-2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB</div>
          </div>
          <div className="w-full p-2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default CurrencyConverter1;
