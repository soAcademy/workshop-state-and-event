const LocalStorage4 = () => {
  const arrayData = [
    {
      name: "Bin",
      location: "Bangkok",
      age: 30,
    },
    {
      name: "Jam",
      location: "Nonthaburi",
      age: 25,
    },
    {
      name: "Ploy",
      location: "Sukhothai",
      age: 20,
    },
  ];
  console.log(JSON.stringify(arrayData));
  localStorage.setItem("arrayObjectData", JSON.stringify(arrayData));

  const data = JSON.parse(localStorage.getItem("arrayObjectData"));
  console.log(data);

  return data.map((r) => (
    <>
      <div>{r.name}</div>
      <div>{r.location}</div>
      <div>{r.age}</div>
      <br />
    </>
  ));
};

export default LocalStorage4;
