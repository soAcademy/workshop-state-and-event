const LocalStorage1 = () => {
  localStorage.setItem("username", "First");

  const username = localStorage.getItem("username");

  return (
    <div className="m-3 pl-2 py-1 bg-sky-900 rounded">
      <p className="text-white">Username: {username}</p>
    </div>
  );
};

export default LocalStorage1;
