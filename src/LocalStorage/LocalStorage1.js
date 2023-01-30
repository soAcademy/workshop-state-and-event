const LocalStorage1 = () => {
  localStorage.setItem("username", "Ball");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

export default LocalStorage1;