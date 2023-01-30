const LocalStorage1 = () => {
  // localStorage.setItem("username", "Bin");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

export default LocalStorage1;



// 1. สร้างตัวแปร LocalStorage ชื่อว่า username และ setItem เป็น "Bin" จากนั้น เรียกค่าตัวแปรผ่าน getItem มาแสดงในหน้า browser
