const Product3 = () => {
  return (
    <>
      <div className="w-1/3 bg-gray-700 m-4 p-4 rounded-md">
        <div>
          <img
            className="w-full rounded-md"
            src="https://media-cdn.bnn.in.th/140568/iPhone_13_Pro_Max_Sierra_Blue_1-square_medium.jpg"
          />
        </div>
        <div>
          <h1 className="text-xl text-white mt-4 font-bold">
            {" "}
            Iphone 13 Pro Max
          </h1>
        </div>
        <p className="text-gray-300 mt-2"> Buy 2 get 1 FREE</p>
        <div className="text-right text-amber-500 text-xs">32,000</div>
        <div>
          <button className="w-full rounded-md bg-blue-400 hover:bg-blue-400 active:bg-red-200">
            {" "}
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
};
export default Product3;
