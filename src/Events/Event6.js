const Event6 = () => {
  const selectPH = (e) => {
    console.log("Hello6");
  };

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <div className="">
        <label>INPUT: </label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md bg-gray-50 ml-1 p-2"
          placeholder="Hello"
          onSelect={selectPH}
        />
      </div>
    </div>
  );
};

export default Event6;
