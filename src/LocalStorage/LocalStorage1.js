const LocalStorage1 = () => {
  // localStorage.setItem("username", "Poom");

  const username = localStorage.getItem("username");

  return <>{username}</>;
};

export default LocalStorage1;
