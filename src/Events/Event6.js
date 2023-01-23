const Event6 = () => {
  const changeClass = (e) => {
    console.log("Hello 6")
  };
  return (
    <input
      type="text"
      placeholder="Hello"
      className="w-14 border-2 focus:border-red-600 focus:outline-none"
    ></input>
  );
};

export default Event6;
