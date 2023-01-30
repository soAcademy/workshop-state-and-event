const LocalStorage4 = () => {
  const arrayData = [
    {
      name: "Ball",
      location: "Suratthani",
      age: 26,
    },
    {
      name: "Toon",
      location: "Nonthaburi",
      age: 24,
    },
    {
      name: "Bank",
      location: "Songkhal",
      age: 30,
    },
  ];

  console.log(JSON.stringify(arrayData));
  localStorage.setItem("arrayData", JSON.stringify(arrayData));

  console.log(localStorage.getItem("arrayData"));

  const data = JSON.parse(localStorage.getItem("arrayData"));
  console.log(data);

  return (
    <>
        {data[0].name}, {data[0].location}, {data[0].age}
    </>
  );
};

export default LocalStorage4;