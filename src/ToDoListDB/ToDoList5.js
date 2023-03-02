import React, { useState, useEffect } from "react";
import { BsCheckCircle, BsTrash, BsPlusLg, BsXLg } from "react-icons/bs";
import axios from "axios";

const ToDoList5 = () => {
  const colorPalletes = ["#ffb88a", "	#a0c5e3", "#e39b99", "#9f9bbc", "#a1cec5"];

  const [toggle, setToggle] = useState(false);
  const [reload, setReload] = useState(false);
  // const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    // get task list from api
    axios({
      method: "POST",
      url: `http://localhost:3100/todolist/getTasks`,
    }).then((response) => {
      console.log("response task lists : ", response.data);

      const _tasks = response.data;
      //update state task,setTasks
      setTasks(_tasks);
    });
  }, [reload]);

  // const updateTasks = (newTasks) => {
  //   console.log("newTasks : ", newTasks);
  // localStorage.setItem(
  //   "tasks",
  //   JSON.stringify(newTasks.sort((a, b) => b.id - a.id))
  // );
  //   setTasks(newTasks);
  // };

  const addTask = () => {
    // const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    // console.log(e.target["task"].value);
    // const newTasks = [
    //   ..._tasks,
    //   {
    //     id: new Date().getTime(),
    //     task: e.target["task"].value,
    //     dateTime: new Date(),
    //     status: "active",
    //   },
    // ];
    // add tasks to the list of tasks
    // updateTasks(newTasks);

    // clear input fields
    var data = JSON.stringify({
      task: input,
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3100/todolist/createTask",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setInput("");
        setReload(!reload);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const doneTask = (id) => {
    var data = JSON.stringify({
      id: id,
      status: "DONE",
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3100/todolist/updateTask",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setReload(!reload);
      })
      .catch(function (error) {
        console.log(error);
      });
    //----------------------------------------------------------------
    // const targetTask = tasks.filter((t) => t.id === id)[0];

    // targetTask.status = "done";

    // const newTasks = [...tasks.filter((t) => t.id !== id), targetTask];
    // updateTasks(newTasks);
    //-----------------------------------------------------------------
    // const targetTaskIndex = tasks.findIndex((t) => t.id === id);
    // const newTask = [...tasks];
    // console.log("newTask1: " , newTasks);
    // newTask[targetTaskIndex].status = "done";
    // log.info("newTask2: " , newTasks);
    // updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    var config = {
      method: "post",
      url: "http://localhost:3100/todolist/deleteTask",
      data: {
        id,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="absolute bottom-10 right-10 z-[100]">
        <button
          onClick={() => setToggle(!toggle)}
          className="p-6 text-xl bg-red-300 rounded-full shadow-lg"
        >
          {toggle ? <BsXLg /> : <BsPlusLg />}
        </button>
      </div>
      {toggle && (
        <div
          className="absolute top-1/2 left-1/2 
                      transform -translate-x-1/2 -translate-y-1/2 
                      border-2 w-1/2 z-[100] m-auto bg-white/80 
                      backdrop-blur-sm rounded-xl"
        >
          <form onSubmit={() => addTask()} className="">
            <div className="w-full p-4">
              <h1 className="font-bold text-xl">Add Note</h1>
              <textarea
                type="text"
                id="task"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                required
                className="mt-8 border-2 border-blue-300 rounded p-2 w-full"
              />
              <button
                type="submit"
                // onClick={() => addTask()}
                className="w-full mt-8 p-4 bg-red-300 rounded-xl shadow-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="m-3 grid grid-flow-row grid-cols-4 gap-3 z-[50]">
        {tasks?.map((t, idx) => (
          <div
            className="flex-col bg-yellow-200 p-3 rounded-lg"
            style={{
              backgroundColor: colorPalletes[idx % colorPalletes.length],
            }}
          >
            <div className="flex w-[200px] h-[200px]">
              <div
                className={`w-4 h-4 mt-1.5 mr-2 rounded-full shadow-md 
                              ${t.status === "DONE" ? "hidden" : "bg-red-500"}`}
              ></div>
              <div
                className={`text-lg 
                              ${
                                t.status === "DONE"
                                  ? "text-gray-800/30 line-through"
                                  : "font-bold"
                              }`}
              >
                {t.task}
              </div>
            </div>
            <div className="flex text-sm justify-between">
              <div className="">{new Date(t.dateTime).toDateString("TH")}</div>
              <div className="">
                <button className="px-1" onClick={() => doneTask(t.id)}>
                  <BsCheckCircle />
                </button>
                <button className="px-1" onClick={() => deleteTask(t.id)}>
                  <BsTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList5;
