const Event7 = () => {
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      name:e.target[0].value,
      tel:e.target[1].value,
      email:e.target[2].value
    }
    console.log(data);
  };
return (
    <form className="m-2 bg-blue-100" onSubmit={(e) => submitData(e)}>
      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          placeholder="ชื่อ"
          id="name"
          required
        />
      </div>



      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          placeholder="tel"
          id="tel"
        />
      </div>



      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          placeholder="email"
          id="email"
        />
      </div>



      <button className="bg-red-300 p-4">Submit</button>
      <button className="bg-red-300 p-4" type="reset" >Clear</button>
    </form>
  );
};
export default Event7;

//อยากให้มอง Type เป็น Function หรือตัวแปรที่มันเข้ามาช่วยเลคียร์ข้อมูลในฟอร์มได้เอ.โดยอัตโนมัติ







// 7. สร้าง Form ที่มี 3 inputField คือ 
// - name, 
// - tel และ 
// - email โดย name เป็น required field 
// และมีปุ่ม Submit เมื่อกด submit 
{/* // จะแสดงข้อมูลเป็น object {name: "ค่าที่กรอก", tel: "ค่าที่กรอก", email: "ค่าที่กรอก"} */}