const LocalStorage4 = () => {
  const arrayData = [
    {
      name: `Bin`,
      location: `Bangkok`,
      age: 30,
    },
    {
      name: `Jam`,
      location: `Nonthaburi`,
      age: 25,
    },
    {
      name: `Ploy`,
      location: `Sukhothai`,
      age: 20,
    },
  ];

  console.log(JSON.stringify(arrayData));
  localStorage.setItem("arrayData", JSON.stringify(arrayData));

  console.log(localStorage.getItem("arrayData"));

  const data = JSON.parse(localStorage.getItem("arrayData"));
  console.log(data);

  return (
    <>
      {data[1].name}, {data[0].location}, {data[2].age}s
    </>
  );
};

export default LocalStorage4;
