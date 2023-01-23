const Event5 = () => {
  // const mouseOver = (e) => {
  //   console.log("Hello5");
  // };

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="">
        <h1
          className="w-fit border-2 border-red-200 rounded-lg bg-red-50 cursor-pointer hover:bg-red-100 hover:shadow-md p-2"
          onMouseOver={() => console.log("Hello5")}
        >
          MOUSE OVER HERE PLEASE
        </h1>
      </div>
    </div>
  );
};

export default Event5;
