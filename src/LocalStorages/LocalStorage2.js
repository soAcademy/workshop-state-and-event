const LocalStorage2 = () => {
  localStorage.setItem("number", 14);

  const number = localStorage.getItem("number");

  return (
    <div className="m-3">
      <p>{Number(number) + 3}</p>
      <p>{Number(number) + 4}</p>
      <p>{Number(number) + 5}</p>
    </div>
  );
};

export default LocalStorage2;