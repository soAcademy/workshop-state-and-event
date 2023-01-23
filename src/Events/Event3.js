const Event3 = () => {
  const helloWorld = () => {
    console.log("Hello3");
  };

  return (
    <div className="m-2">
      <button
        type="button"
        className="bg-red-200 rounded-lg shadow-md p-2"
        onClick={helloWorld}
      >
        Button3
      </button>
    </div>
  );
};

export default Event3;
