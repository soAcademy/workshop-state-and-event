import React, { useState, useEffect } from "react";
import { IoIosCheckmarkCircleOutline, IoMdTrash } from "react-icons/io";

const ToDoList5 = () => {
  const colorPalletes = [
    "#f73a3a",
    "#ce4993",
    "#fdc010",
    "#8bc34a",
    "#009688",
    "#351c75",
    "#0ca1b2",
  ];
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);

  const [tasks, setTasks] = useState(_tasks);
  const [togglePopup, setTogglePopup] = useState(false);

  const updateTasks = (newTasks) => {
    console.log(newTasks);
    localStorage.setItem(
      "tasks",
      JSON.stringify(newTasks.sort((a, b) => b.id - a.id))
    );
    setTasks(newTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        id: new Date().getTime(),
        task: e.target["task"].value,
        datetime: new Date(),
        status: "active",
      },
    ];
    updateTasks(newTasks);
  };

  const doneTask = (id) => {
    const targetTask = tasks.filter((r) => r.id === id)[0];
    const newTasks = [
      ...tasks.filter((r) => r.id !== id),
      {
        id,
        task: targetTask.task,
        datetime: targetTask.datetime,
        status: "done",
      },
    ];

    // const targetTaskIndex = tasks.findIndex((r) => r.id === id);
    // const newTasks = [...tasks];
    // newTasks[targetTaskIndex].status = "done";

    updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id !== id);

    updateTasks(newTasks);
  };

  return (
    <>
      {togglePopup && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              addTask(e);
              setTogglePopup(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-2/5 rounded-lg"
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto">เพิ่มโน๊ต</h1>
              <span
                className="cursor-pointer"
                onClick={() => setTogglePopup(false)}
              >
                ปิด
              </span>
            </div>
            <div>
              <textarea
                type="text"
                id="task"
                className="border-2 border-blue-300 rounded py-2 w-full"
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-red-300 rounded w-full font-bold"
              >
                เพิ่ม
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="grid grid-cols-4">
        {tasks?.map((r, idx) => (
          <div
            key={idx}
            className="mt-2 rounded-lg p-4 m-2"
            style={{
              backgroundColor: colorPalletes[idx % colorPalletes.length],
            }}
          >
            <div
              className={`h-32 text-white text-2xl ${
                r.status === "done" ? "line-through" : ""
              }`}
            >
              {r.task}
            </div>
            <div className="flex">
              <div className="text-sm text-gray-200 flex-auto">
                {new Date(r.datetime).toLocaleString("TH")}
              </div>
              <div>
                {r.status === "active" && (
                  <button onClick={() => doneTask(r.id)}>
                    <IoIosCheckmarkCircleOutline className="text-white hover:text-amber-200 text-2xl" />
                  </button>
                )}
                <button className="" onClick={() => deleteTask(r.id)}>
                  <IoMdTrash className="text-white hover:text-amber-200 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setTogglePopup(true)}
        className="fixed bottom-5 right-5 rounded-full w-12 h-12 bg-yellow-400 hover:bg-amber-400 md-lg text-2xl flex items-center shadow-lg"
      >
        <span className="text-center w-full">+</span>
      </button>
    </>
  );
};

export default ToDoList5;
