import react, { useState, useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { ImBin } from "react-icons/im";
import axios from "axios";

const ToDoListWorkShop2 = () => {
  const colorPalletes = [
    "#797ef6",
    "#4adede",
    "#1aa7ec",
    "#1e2f97",
    "#009688",
    "#351c75",
    "#0ca1b2",
  ];

  const [tasks, setTasks] = useState([]); //for mapping/ rendering on screen
  const [toggleCartPopup, setToggleCartPopup] = useState(false);
  // const [chooseDelete, setChooseDelete] = useState();

  const updateTasks = (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks.sort((a, b) => b.id - a.id));
  };

  const getAllTasks = async () => {
    const result = await axios.post("http://localhost:3000/todoList/getTasks");
    console.log("result", result);
    setTasks(result.data);
  };

  useEffect(() => {
    getAllTasks();
  }, []); //empty dependency [] as only render once

  // const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  //   console.log(_tasks);

  const addTask = async (task) => {
    const result = await axios.post(
      "http://localhost:3000/todoList/createTask",
      { task: task }
    );
    await getAllTasks()
  };

  const doneTask = async (id) => {
    const result = await axios.post(
      "http://localhost:3000/todoList/updateTask",
      { id, status: "DONE" }
    );
    console.log("delete", result);
    await getAllTasks();
  };

  const deleteTask = async (id) => {
    const result = await axios.post(
      "http://localhost:3000/todoList/deleteTask",
      { id: id }
    );
    await getAllTasks();
    // var data = JSON.stringify({
    //   "id": id,
    // });
    // var config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "http://localhost:3000/todoList/deleteTask",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <>
      {toggleCartPopup && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <div className="bg-sky-200 rounded-lg w-52 h-52 m-auto px-4 py-7 items-center">
            <div className="flex">
              <div className="text-base mb-1 text-teal-800 text-left flex-auto my-auto">
                Add To-Do List
              </div>
              <div>
                <button
                  className="text-sm text-teal-800 font-bold"
                  onClick={() => setToggleCartPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                addTask(e.target[0].value); //why [0]?
                setToggleCartPopup(false);
              }}
              className="flex flex-col m-auto"
            >
              <input
                type="text"
                id="tasks"
                className="mr-4 py-2 border-2 rounded border-blue-300 w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 my-2 mb-3 bg-teal-800 rounded text-white "
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
      <div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2 ml-10 mb-3">
          {tasks?.map((r, idx) => (
            <div
              key={idx}
              className="mt-5 rounded w-32 p-2 h-32"
              style={{
                backgroundColor: colorPalletes[idx % colorPalletes.length],
              }}
            >
              <h1
                className={`h-20 text-white text-2xl ${
                  r.status === "done" ? "line-through" : ""
                }`}
              >
                {r.task}
              </h1>
              {/* <div>{r.status }</div> */}
              <div className="flex">
                <div className="text-xs text-white ">
                  {/* {" "} */}
                  {new Date(r.updatedAt).toLocaleString("TH")}
                </div>
                <div className="flex">
                  {r.status === "PENDING" && (
                    <button
                      className=" px-1 rounded-full text-white mx-auto m-1"
                      onClick={() => doneTask(r.id)}
                    >
                      <TiTickOutline />
                    </button>
                  )}
                  <button
                    className="rounded-full text-white mx-auto mr-1 text-xs"
                    onClick={() => deleteTask(r.id)}
                  >
                    <ImBin />
                  </button>
                </div>
              </div>
              {/*{} for rendering in JSX, not as texts*/}
            </div>
          ))}
        </div>
      </div>
      <button className="flex" onClick={() => setToggleCartPopup(true)}>
        <span className="fixed bottom-10 lg:right-12 right-6 bg-green-300 rounded-full h-12 w-12 py-2 font-bold text-2xl m-auto">
          +
        </span>
      </button>
    </>
  );
};

export default ToDoListWorkShop2;
