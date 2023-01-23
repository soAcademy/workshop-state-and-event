const Event1 = () => {
  return (
    <div className="m-2">
      <button
        type="button"
        className="bg-red-200 rounded-lg shadow-md p-2"
        onClick={() => console.log("Hello World")}
      >
        Button1
      </button>
    </div>
  );
};

export default Event1;