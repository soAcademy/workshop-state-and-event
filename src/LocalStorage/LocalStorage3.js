const LocalStorage3 = () => {
  const objectData = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };

  console.log(JSON.stringify(objectData));
  localStorage.setItem("objectData", JSON.stringify(objectData));

  console.log(localStorage.getItem("objectData"));

  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);

  return (
    <>
      {data.name}, {(data.location)}, {(data.age)}
    </>
  );
};

export default LocalStorage3;
