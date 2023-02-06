const Trivia1 = () => {
  return (
    <>
      <div>
        <h1 className="text-center">Q. 1/10</h1>
        <div className="text-center">10 marks</div>
        <div className="text-center mb-3">Question</div>
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4).keys()].map((choice, index) => (
            <div>
              <div className="bg-sky-400 border border-3 py-4 m-auto text-center" key={index}>{choice}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trivia1;
