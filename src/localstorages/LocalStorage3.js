const LocalStorage3 = () => {
  const objectData ={
    name: "Teak",
    age: 22,
    location: "Bangkok",
  }

  console.log(JSON.stringify(objectData)) //converts object to string
  localStorage.setItem("objectData", JSON.stringify(objectData)) //localStorage.setItem can only accepts strings  // set stored information in Application
  console.log(localStorage.getItem("objectData")); //"get" displays object from application

  const data = JSON.parse(localStorage.getItem("objectData")); //converts string back to object
  console.log(data);
  return(
    <>
      {data.name}, {data.location}, {data.age}
    </>
  )
}
export default LocalStorage3;