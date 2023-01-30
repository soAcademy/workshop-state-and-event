const LocalStorage2 = () => {
  localStorage.setItem("num", 14);

  const num = localStorage.getItem("num");
  const plusNum = Number(num) + 3;
  console.log(plusNum);

  return <>{plusNum}</>;
};

export default LocalStorage2;
