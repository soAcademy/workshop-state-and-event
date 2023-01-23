const Event3 = () => {
  const helloWorld = () => console.log("Hello 3");
  return (
    <div className="my-2">
      <button
        className="bg-gray-600 text-primary text-bold-center"
        onClick={helloWorld}
      >
        Button 3
      </button>
    </div>
  );
};

export default Event3;




// 3. สร้างปุ่ม ที่ Click แล้วให้ console.log("Hello 3"); 
// แต่ console.log ให้สร้างเป็น function ชื่อ helloWorld 
// ตอนเรียก onClick ให้เรียกแบบ onClick={helloWorld2} (onClick, function)
