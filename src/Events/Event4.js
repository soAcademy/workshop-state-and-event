const Event4 = () => {
  const inputChange = (e) => console.log(e.target.value);

  return (
    <div className="my-2">
      <input className="border-2 border-gray-600" onChange={(e) => inputChange(e)} />
    </div>
  );
};

export default Event4;









// 4. สร้าง Input Field ที่เมื่อกรอกค่าใดๆ แล้ว console.log ค่าที่กรอก (onChange) 
// แล้วก็สร้าง input ขึ้นมาเป็น Inputchange เพื่อให้มันเป็น Console.log ทุกค่าที่ใส่เข้าไป
//อันนี้ไม่ต้องมี Buttom เพราะมันออกแบบมาให้เรามีตัวปุ่มกดให้อญู่แล้ว