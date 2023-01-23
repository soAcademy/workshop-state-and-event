const Event6 = () => {
  return (
    <input
      className="my-2 bg-yellow-200 border border-black"
      onSelect={() => console.log("Hello 6")}
      placeholder="Hello"
    />
  );
};

export default Event6;







// 6. สร้าง input ที่มี placeholder ว่า "Hello" เมื่อคลิ้กที่จะ console.log("Hello 6") (onSelect)
// onSelect มันจะแบบกดหนังทีปล่อย Event ปล่อยอีกทีก็เป็นอีก Event เราจะใช้ทำฟอร์มที่ไว้โชว์คำอธิบายว่าจะไว้กรอกอะไรยังไง
