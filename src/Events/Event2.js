const Event2 = () => {
  const helloWorld = () => {
    console.log('Hello2');
  }

  return (
    <div className="m-2">
      <button
        type="button"
        className="bg-red-200 rounded-lg shadow-md p-2"
        onClick={() => helloWorld() }
      >
        Button2
      </button>
    </div>
  );
};

export default Event2;