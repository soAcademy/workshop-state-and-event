const Trivia2_1 = () => {
  return (
    <div className="text-center pt-2">
      <div>Question 1/10</div>
      <div>Score: 1 point</div>
      <div>Question</div>

      <div className="grid grid-cols-2 w-2/3 m-auto pt-2">
        {[...Array(4).keys()].map((r, idx) => (
          <div
            key={idx}
            className="bg-sky-500 p-4 border border-2 border-black m-2"
          >
            {idx}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia2_1;
