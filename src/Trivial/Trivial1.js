const Trivial = () => {
  return(
    <>
      <div className="text-center bolt text-3xl" >ข้อ 1/10</div>
      <div className="text-center text-xl" >คะแนน 0</div>
      <div className="py-4 text-center text-lg">คำถาม</div>  
      <div className="grid gap-2 grid-cols-2 " >
        {[...Array(4).keys()].map((r, index) => (
          <button className="bg-sky-400 py-2 rounded-lg">{r}</button>
        ))}
        </div>
    </>
  )
};
export default Trivial;