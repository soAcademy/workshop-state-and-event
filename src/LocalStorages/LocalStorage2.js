const LocalStorage2 = () => {
  localStorage.setItem("number", 14);

  const number = localStorage.getItem("number");

  return (
    <div className="m-3 pl-2 py-1 bg-sky-800 rounded ">
      <p className="text-white">{Number(number) + 3}</p>
    </div>
  );
};

export default LocalStorage2;
