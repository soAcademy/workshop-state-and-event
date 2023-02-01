const LocalStorage1 = () => {
  // localStorage.setItem("username", "Bin");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

export default LocalStorage1;
