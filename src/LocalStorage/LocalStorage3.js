const LocalStorage3 = () => {
  const objectData = {
    name: "Ball",
    location: "Suratthani",
    age: 26,
  };
  

  console.log(JSON.stringify(objectData));
  localStorage.setItem("objectData", JSON.stringify(objectData));

  //setItem เพื่อ save ข้อมูลลงใน Storage ให้มีอยู่ใน 
  //Application/Local storage


  console.log(localStorage.getItem("objectData"));

  //getItem เพื่อดึงค่าจาก Database เข้ามา

  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);

  //

  return (
    <>
      {data.name}, {data.location}, {data.age}
    </>
  );
};

export default LocalStorage3;