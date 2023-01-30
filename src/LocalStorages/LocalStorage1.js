const LocalStorage1 = () => {
  localStorage.setItem("username", "First");

  const username = localStorage.getItem("username");

  return (
    <div className="m-3">
      <p>Username: {username}</p>
    </div>
  );
};

export default LocalStorage1;
