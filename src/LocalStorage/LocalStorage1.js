const LocalStorage1 = () => {
  localStorage.setItem("username", "Bin");

  return <div className="p-4">{localStorage.getItem("username")}</div>;
};

export default LocalStorage1;
