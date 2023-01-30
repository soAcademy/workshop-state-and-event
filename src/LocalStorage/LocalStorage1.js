import {useState} from 'react'

const LocalStorage1 = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'))
  return (
    <div>
      {username}
      <button
        onClick={() => {
          setUsername(`${username === "Bin" ? "Earth" : "Bin"}`)
          localStorage.setItem("username", username);
        }}
        className="rounded-lg p-2 bg-red-300"
      >
        Change Name
      </button>
    </div>
  );
};

export default LocalStorage1;
