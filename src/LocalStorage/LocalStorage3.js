const LocalStorage3 = () => {
  const data = {
    name: "Born",
    Location: "Nonthaburi",
    age: 28,
  };
  console.log(JSON.stringify(data));
  localStorage.setItem("objectData", JSON.stringify(data));

  const data2 = JSON.parse(localStorage.getItem("objectData"));
  console.log(data2);

  return (
    <>
      <div>{data2.name}</div>
      <div>{data2.Location}</div>
      <div>{data2.age}</div>
    </>
  );
};

export default LocalStorage3;
