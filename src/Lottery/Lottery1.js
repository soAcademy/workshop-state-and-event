const Lottery1 =()=>{
  return (
    <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
      <div className="font-bold text-xl text-center ">ตรวจผล Lottery</div>
      <form>
        <div className="">
          <label>กรอกตัวเลข</label>
          <br />
          <input
            type="text"
            name="lottery_number"
            className="p-2 w-full mt-2 h-48"
            placeholder="333333"
          ></input>
        </div>
      </form>
    </div>
  );
}
export default Lottery1