const Event3 = () => {
  const helloWorld = () => console.log("Hello 3");
  return (
    <div className="bg-gray-300 w-fit">
      <button onClick={helloWorld}>Event3</button>
    </div>
  );
};

export default Event3;
