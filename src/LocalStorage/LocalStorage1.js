import {useState} from 'react'

const LocalStorage1 = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'))
  return (
    <div>
      {username}
      <button
        onClick={() => {
          localStorage.setItem("username", `${username === "Bin" ? "Earth" : "Bin"}`);
          setUsername(localStorage.getItem('username'))
        }}
        className="rounded-lg p-2 bg-red-300 mx-2"
      >
        Change Name
      </button>
    </div>
  );
};

export default LocalStorage1;
