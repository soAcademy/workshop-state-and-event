const LocalStorage1 = () => {
  localStorage.setItem("username", "Boeing");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

export default LocalStorage1;
