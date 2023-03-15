import { useState, useEffect, useContext } from "react";
import { ContextUserId } from "../twitter";
import axios from "axios";

export const TestUser = () => {
  const { setUserId } = useContext(ContextUserId);
  const [allUsers, setAllUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    reloadDatas();
  }, []);

  const reloadDatas = () => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/twitter/getUsers",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setAllUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addUser = () => {
    const addData = () => {
      const data = JSON.stringify({
        username: newName,
        image: newUrl,
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/twitter/createUser",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          reloadDatas();
          setNewName("");
          setNewUrl("");
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    newName.trim() !== "" && newUrl.trim() !== "" && addData();
  };

  return (
    <div className="relative">
      <div className=" my-8">
        <div className="text-center mb-8">TestUser:Select</div>
        <div className="grid grid-cols-4 gap-4 items-start mb-8">
          {allUsers.map((user) => (
            <button
              className="w-full"
              key={user.id}
              onClick={() => setUserId(user.id)}
            >
              <img
                className="object-cover aspect-[1/1] rounded-t-lg mb-2"
                src={user.image}
                alt={user.username}
              />
              <div className="text-center">{user.username}</div>
            </button>
          ))}
        </div>
        <div className="addUserBlock bg-slate-50 rounded-lg p-2">
          <h1 className="mb-4">Add User for test</h1>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-900">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-900">
              Image url
            </label>
            <input
              type="text"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <button
            onClick={() => addUser()}
            className="w-full block bg-cyan-400 hover:bg-cyan-500 rounded-full text-white p-4 mb-6"
            required
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
