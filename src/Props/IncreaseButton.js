const IncreaseButton = ({ counter, setCounter }) => {
  const increase = () => {
    setCounter(counter + 1);
  };
  return (
    <button
      onClick={increase}
      className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
    >
      Increase
    </button>
  );
};

export default IncreaseButton;