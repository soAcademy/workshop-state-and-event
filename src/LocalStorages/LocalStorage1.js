const LocalStorage1 = () => {
  localStorage.setItem("username", "First");

  const username = localStorage.getItem("username");

  return <div>{username}</div>;
};

export default LocalStorage1;
