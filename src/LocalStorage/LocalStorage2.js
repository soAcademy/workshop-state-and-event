const LocalStorage2 = () => {
  // localStorage.setItem("num", 18);

  const num = localStorage.getItem("num");

  return <>{Number(num) + 2}</>;
};

export default LocalStorage2;
