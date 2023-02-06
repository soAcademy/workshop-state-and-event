const LocalStorage2 = () => {
  localStorage.setItem("num", 14);

  const num = localStorage.getItem("num");

  return <>{Number(num) + 3}</>;
};
// "14" + "3" --> "143"
// 14 + 3 --> 17

export default LocalStorage2;
