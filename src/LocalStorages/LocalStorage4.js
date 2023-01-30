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

  localStorage.setItem("arrayData", JSON.stringify(arrayData));

  const data = localStorage.getItem("arrayData");
  console.log(data);
  const dataParse = JSON.parse(data);
  console.log(dataParse);

  return (
    <>
      {dataParse.map((r, idx) => {
        return (
          <p key={idx}>
            {r.name},{r.location},{r.age}
          </p>
        );
      })}
    </>
  );
};

export default LocalStorage4;
