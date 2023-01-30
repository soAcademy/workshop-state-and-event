const LocalStorage3 = () => {
  const objectData = {
    name: "First",
    location: "Chiang Mai",
    age: 23,
  };

  console.log(JSON.stringify(objectData));
  localStorage.setItem("objectData", JSON.stringify(objectData));
  console.log(localStorage.getItem("objectData"));

  const data = JSON.parse(localStorage.getItem("objectData"));
  console.log(data);

  return (
    <div className="m-3 pl-2 py-1 bg-sky-700 rounded">
      <p className="text-white">Name: {data.name}</p>
      <p className="text-white">Location: {data.location}</p>
      <p className="text-white">Age: {data.age}</p>
    </div>
  );
};

export default LocalStorage3;
