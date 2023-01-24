const DecreaseButton = ({ counter, setCounter }) => {
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <button
      onClick={decrease}
      className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
    >
      Decrease
    </button>
  );
};

export default DecreaseButton;