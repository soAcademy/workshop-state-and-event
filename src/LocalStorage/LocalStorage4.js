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
  !localStorage.getItem("arrayData") &&
    localStorage.setItem("arrayData", JSON.stringify(arrayData));

  const arrayDataStore = JSON.parse(localStorage.getItem("arrayData"));

  return (
    <div className="p-4">
      {arrayDataStore.map((dataStore) => (
        <div>
          {dataStore.name}, {dataStore.location}, {dataStore.age}
        </div>
      ))}
    </div>
  );
};

export default LocalStorage4;
