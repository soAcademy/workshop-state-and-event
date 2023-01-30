const LocalStorage3 = () => {


  const objectData = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };
  console.log(JSON.stringify(objectData));


  localStorage.setItem("objectData", JSON.stringify(objectData));
// คือการ Save ข้อมูลลงใน Local Storage คือถ้าเราอยากจะเซฟก็ใช้อันนี้ 

  console.log(localStorage.getItem("objectData"));
// อันนี้ไว้สำหรับการดึงค่าเข้ามา


  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);
  // เราจะต้องใช้ JSON.parse เพื่อเปลงให้มันเเป็น strong ก่อน เราจะแปลงตรงท Setitem 

  
  return (
    <>
      {data.name}, {data.location}, {data.age}
    </>
  );
};
export default LocalStorage3;