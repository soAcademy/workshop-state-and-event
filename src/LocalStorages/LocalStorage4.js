const LocalStorage4 = () => {
  const arrayData = [
    {
      name: "First",
      location: "Chiang Mai",
      age: 23,
    },
    {
      name: "Bin",
      location: "Bangkok",
      age: 30,
    },
    {
      name: "ploy",
      location: "Sukhothai",
      age: 20,
    },
  ];

  console.log(JSON.stringify(arrayData));
  localStorage.setItem("arrayData", JSON.stringify(arrayData));

  console.log(localStorage.getItem("arrayData"));

  const data = JSON.parse(localStorage.getItem("arrayData"));
  console.log(data);

  return (
    <div className="m-3 pl-2 py-1 bg-sky-600 rounded">
      <p className="text-white">Name: {data[2].name}</p>
      <p className="text-white">Location: {data[2].location}</p>
      <p className="text-white">Age: {data[2].age}</p>
    </div>
  );
};

export default LocalStorage4;
