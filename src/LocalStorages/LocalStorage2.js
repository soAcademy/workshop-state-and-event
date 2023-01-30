const LocalStorage2 = () => {
  // localStorage.setItem("num", 14);

  const num = localStorage.getItem("num");

  return <>{Number(num) + 3}</>;
};

export default LocalStorage2;


// 2. สร้างตัวแปร LocalStorage ชื่อว่า num และ setItem เป็น 14 จากนั้น เรียกค่าตัวแปรผ่าน getItem นำมาบวก 3 และนำมาแสดงในหน้า browser