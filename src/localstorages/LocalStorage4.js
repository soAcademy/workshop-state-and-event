const LocalStorage4 = () => {
  const arrayOfData = [
    {
      name: "Teak",
      age: 22,
      location: "Bangkok",
    },
    {
      name: "Jam",
      age: 30,
      location: "Phuket",
    },
    {
      name: "Ploy",
      age: 25,
      location: "Chiang Mai",
    },
  ];

  console.log(JSON.stringify(arrayOfData));
  localStorage.setItem("arrayOfData", JSON.stringify(arrayOfData));

  console.log(localStorage.getItem("arrayOfData"));

  const data = JSON.parse(localStorage.getItem("arrayOfData"));

  console.log(data);

  return (
    <>
      {data[1].name}, {data[1].location}, {data[1].age}
    </>
  );
};
export default LocalStorage4;
