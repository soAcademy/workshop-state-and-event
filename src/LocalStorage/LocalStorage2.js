const LocalStorage2 = () => {
  localStorage.setItem("num", 14);

  return <div className="p-4">{Number(localStorage.getItem("num")) + 3}</div>;
};

export default LocalStorage2;
