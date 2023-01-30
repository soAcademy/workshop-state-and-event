const LocalStorage3 = () => {
  const objectData = {
    name: "Cake",
    location: "Bangkok",
    age: 29,
  };

  console.log(JSON.stringify(objectData));

  // JSON.stringify ---> แปลง สตริง เป็น JSON format
  localStorage.setItem("objectData", JSON.stringify(objectData));

  console.log(localStorage.getItem("objectData"));

  // JSON.parse ---> แปลง JSON เป็น Object format
  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);

  return (
    <>
      {data.name}, {data.location}, {data.age}
    </>
  );
};

export default LocalStorage3;
