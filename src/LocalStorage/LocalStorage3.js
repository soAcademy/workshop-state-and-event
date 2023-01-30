const LocalStorage3 = () => {
  const objectData = {
    name: "Poom",
    location: "Bangkok",
    age: 30,
  };
  // When sending data to a web server, the data has to be a string.
  // Convert a JavaScript object into a string with JSON.stringify().

  console.log(JSON.stringify(objectData));
  localStorage.setItem("objectData", JSON.stringify(objectData));

  console.log(localStorage.getItem("objectData"));
  // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);

  return (
    <>
      {data.name}, {data.location}, {data.age}
    </>
  );
};

export default LocalStorage3;
