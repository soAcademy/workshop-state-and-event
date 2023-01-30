const LocalStorage2 = () => {
  localStorage.setItem("num", 14);
  const num = localStorage.getItem("num");
  return <div>{Number(num) + 3}</div>;
};

export default LocalStorage2;
