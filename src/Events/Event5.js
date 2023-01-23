const Event5 = () => {
  return (
    <div className="my-2">
      <button
        className="bg-gray-600 text-primary text-bold-center"
        onMouseOver={() => console.log("Hello 5")}
      >Button 5</button>
    </div>
  );
};

export default Event5;


// 5. สร้าง div ที่วาง Mouse แล้ว console.log("Hello 5"); (onMouseOver)
//เหมืนอข้อหนึ่งเปะ ถ้าเราใช้ตัวนี้มันจะทำให้เราเหมือนได้ยอดคลิกมาเยอะขึ้นมาก เฉียบไปเลย 