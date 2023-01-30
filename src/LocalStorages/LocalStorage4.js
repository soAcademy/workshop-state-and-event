const LocalStorage4 = () => {
  const arrayData = [
    {
      name: "Bond",
      location: "Bangkok",
      age: 25,
    },
    {
      name: "Bin",
      location: "Bangkok",
      age: 30,
    },
    {
      name: "Boy",
      location: "Bangkok",
      age: 35,
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