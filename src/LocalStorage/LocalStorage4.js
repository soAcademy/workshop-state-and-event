const LocalStorage4 = ()=>{
  const ArrayOfObject = [
    {
      name: "Dew",
      location: "UTH",
      tel : 123
    },
    {
      name: "Kad",
      location: "BKK",
      tel : 456
    },
    {
      name: "Moo",
      location: "CNX",
      tel : 1789
    }
  ];
  console.log(">>> ArrayOfObject",ArrayOfObject);
  localStorage.setItem("data",JSON.stringify(ArrayOfObject));   //Save   OBJ to String 

  console.log("JSON.stringify",localStorage.getItem("data"))
  console.log("JSON.parse",JSON.parse(localStorage.getItem("data")));
  const arr = JSON.parse(localStorage.getItem("data"));  //Get + Transform String to OBJ 
  return(
    <>{arr[0].name}, {arr[0].location},{arr[0].tel}</>
  );
};
export default LocalStorage4;