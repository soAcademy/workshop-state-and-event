const Shop = ({ data }) => (
  <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-screen">
    {data.map((e) => (
      <div className="flex flex-col m-14 bg-gray-700 rounded-lg shadow-md hover:shadow-2xl hover:bg-slate-700 duration-300 h-[600px] w-5/6">
        <div className="flex justify-center relative -top-2 h-fit">
          <p className="p-1 w-2/5 bg-blue-500 rounded-md text-white text-center shadow-xl cursor-default">
            {e.category}
          </p>
        </div>
        <div className="p-4 h-1/3">
          <a href="" target="_blank">
            <img
              className="rounded w-full h-full object-cover"
              src={e.imgSource}
              alt="img.jpg"
            ></img>
          </a>
        </div>
        <a href="" target="_blank" className="p-4 h-full">
          <div className="flex flex-col h-full">
            <div className="h-1/2">
              <h4 className=" text-white font-bold text-xl">
                {e.type} : {e.itemName}
              </h4>
            </div>
            <p className="text-gray-400 text-sm h-2/3">
              {e.description}
            </p>
          </div>
        </a>
        <div className="pb-4 p-2 h-1/5 relative bottom-0">
          <p className="pb-2 text-red-400 text-lg text-right">${e.price}</p>
          <button className=" h-10 w-full bg-blue-600 rounded text-white text-base hover:shadow-2xl hover:bg-blue-500 active:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
);
export default Shop;
