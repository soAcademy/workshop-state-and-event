const LocalStorage1 = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      {username}
      <button
        onClick={() => {
          localStorage.setItem("username", `${username === "Bin" ? "Earth" : "Bin"}`);
        }}
        className="rounded-lg p-2 bg-red-300"
      >
        Change Name
      </button>
    </div>
  );
};

export default LocalStorage1;
