const Event5 = () => {
  return (
    <div className="my-2">
      <div
        className="bg-white-600 text-bold"
        onMouseOver={() => console.log("Hello 5")}
      >Button 5</div>
    </div>
  );
};

export default Event5;


// 5. สร้าง div ที่วาง Mouse แล้ว console.log("Hello 5"); (onMouseOver)
//เหมืนอข้อหนึ่งเปะ ถ้าเราใช้ตัวนี้มันจะทำให้เราเหมือนได้ยอดคลิกมาเยอะขึ้นมาก เฉียบไปเลย 