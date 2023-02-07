const Trivia1 = () => {
  return (
    <>
      <div className="text-center">ข้อ 1/10</div>
      <div className="text-center">คะแนน 0</div>
      <div className="py-4 text-center">คำถาม</div>
      <div className="grid gap-2 grid-cols-2">
        {[...Array(4).keys()].map((r, index) => (
          <button className="bg-green-400 py-4">{r}</button>
        ))}
      </div>
    </>
  );
};

export default Trivia1;
