const Trivia1 = () => (
  <div className="w-full h-screen flex justify-center items-center font-prompt p-4">
    <div className="w-[600px] bg-gray-100 rounded-lg shadow-md p-8">
      <h1 className="text-3xl text-center font-bold mb-12">TRIVIA GAME</h1>
      <div className="score">
        <p className="text-center mb-8">Score: xx</p>
      </div>
      <div className="question">
        <p className="text-center mb-8">Q1: ซุปอะไรมีสารอาหารมากที่สุด</p>
      </div>
      <div className="choice grid grid-col-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((r, idx) => (
          <button className="h-14 bg-green-200 flex items-center rounded-full hover:bg-green-300 shadow-sm active:shadow-md p-4">
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default Trivia1;
