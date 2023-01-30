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
  const arrayObject = JSON.parse(localStorage.getItem("arrayData"));

  return (
    <div className="">
      {arrayObject.map((e) => {
        return (
          <div className="bg-red-300 rounded-lg w-fit m-2 p-2">
            <div>Name: {e.name}</div>
            <div>Age: {e.age}</div>
            <div>Location: {e.location}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LocalStorage4;
