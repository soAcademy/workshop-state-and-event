const Event2 = () => {
  const helloWorld = () => console.log("Hello 2");
  return (
    <div className="bg-gray-400 w-fit">
      <button onClick={() => helloWorld()}>Event2</button>
    </div>
  );
};

export default Event2;
