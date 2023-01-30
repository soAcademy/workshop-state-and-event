const LocalStorage3 = () => {
  const objectData = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };
  console.log("objectData: " + objectData);
  console.log("objectDataStringify: " + JSON.stringify(objectData));

  localStorage.setItem("objectData", JSON.stringify(objectData));

  const data = JSON.parse(localStorage.getItem("objectData"));

  console.log('data: ' + data);
  console.log("dataStringify: " + JSON.stringify(data));

  return (
    <>
      {data.name},{data.location},{data.age}
    </>
  );
};

export default LocalStorage3;
