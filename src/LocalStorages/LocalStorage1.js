const LocalStorage1 = () => {
  localStorage.setItem("username", "Bin");

  const username = localStorage.getItem("username");
  console.log(username);

  return <>{username}</>;
};

export default LocalStorage1;
