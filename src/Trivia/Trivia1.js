const Trivia1 = () => {
  console.log([...Array(4).keys()]);
  return (
    <>
      <div className="text-center mt-2">ข้อ 1/5</div>
      <div className="text-center">คะแนน 0</div>
      <div className="text-center">คำถาม</div>
      <div className="grid grid-cols-2 gap-2 text-center mx-2">
        {[...Array(4).keys()].map((r, idx) => (
          <button className="bg-blue-300 rounded p-4 mt-4">{r}</button>
        ))}
      </div>
    </>
  );
};

export default Trivia1;
