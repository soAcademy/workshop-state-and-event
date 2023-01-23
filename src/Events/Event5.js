const Event5 = () => {
  const helloWorld = () => console.log("Hello 5");
  return (
    <div className="bg-gray-400 w-fit" onMouseOver={helloWorld}>
      Event5
    </div>
  );
};

export default Event5;
