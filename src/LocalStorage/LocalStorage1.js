const LocalStorage1 = () => {
  localStorage.setItem("username", "Cake");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

export default LocalStorage1;
