const LocalStorage3 = () => {
  const objectData = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };

  !localStorage.getItem("objectData") &&
    localStorage.setItem("objectData", JSON.stringify(objectData));

  const objectDataStore = JSON.parse(localStorage.getItem("objectData"));

  return (
    <div className="p-4">
      {objectDataStore.name}, {objectDataStore.location}, {objectDataStore.age}
    </div>
  );
};

export default LocalStorage3;
