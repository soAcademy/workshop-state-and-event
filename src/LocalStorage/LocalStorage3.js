const LocalStorage3 =()=>{
  const objectData = {
    name:"Dew",
    location: "UTH",
    age: 32,
  };

  console.log('ObjectData',objectData);   //Object data
  console.log("JSON.stringify(objectData)",JSON.stringify(objectData));  //Transform object data to JSON string  
  localStorage.setItem("ObjectData", JSON.stringify(objectData));         //LocalStorage set ค่า JSON string ใน local storage  LocalStorage จะเก็บข้อมูลอยู่ในรูป JSON string
  console.log("localStorage.getItem(ObjectData)",localStorage.getItem("ObjectData")); // localStorage.getItem คือคำสั่งแสดงค่ามาที่ DOM 
  const data = JSON.parse(localStorage.getItem("ObjectData"));  //Transform JSON string into object
  console.log(data);
  return(
    <>
    {data.name},{data.location},{data.age}
    </>
  );
};
export default LocalStorage3;