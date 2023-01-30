const LocalStorage3 = () => {
  const objectData = {
    name: "Bin",
    location: "Bangkok",
    age: 30,
  };
  localStorage.setItem("objectData", JSON.stringify(objectData));
  const object = JSON.parse(localStorage.getItem("objectData"));
  return (
    <div className="bg-red-300 w-fit rounded-lg p-2">
      <div>Name: {object.name}</div>
      <div>Location: {object.location}</div>
      <div>Age: {object.age}</div>
    </div>
  );
};
export default LocalStorage3;
