const Event8 = () => {
  const submitData = (e) => {
    // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
      <div>
        <input
          className="h-12 border border-red-200 mt-2"
          id="image"
          type="file"
          accept="image/png, image/jpeg"
          //MEME TYPE
          onChange={(e)=>submitData(e)}
        />
      </div>
  );
};
export default Event8;

//เวลาทำแบบฟอร์มแล้วอยากจะให้มีแนบไฟล์ก็มาใช้อันนี้ได้เลย อาจจะต้องปรับอะไรนิดหน่อย
//On change เค้าจะใช้เมื่อเราต้องการเปลี่ยนแปลงค่า แต่ในกรณีนี้ Input มันมี Type file ไงมัน