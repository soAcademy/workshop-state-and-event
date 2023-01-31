import React, { useState, useEffect } from "react";

const ToDoList4 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);
  const [tasks, setTasks] = useState(_tasks);

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
      {
        task: e.target["task"].value,
        id: new Date().getTime,
        datetime: new Date(),
        status: "active",
      },
      ..._tasks,
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
    updateTasks(newTasks);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id != id);

    updateTasks(newTasks);
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-sky-400 rounded py-2 mr-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 rounded text-white"
        >
          เพิ่ม
        </button>
      </form>
      <div>
        {tasks?.map((r) => (
          <div className="bg-sky-500 mt-2 text-white p-3">
            <h1>To do list : {r.task}</h1>
            <div>สถานะ : {r.status}</div>
            <div>วันที่ : {new Date(r.datetime).toLocaleString("TH")}</div>
            <div className="my-3">
              <button
                className="bg-green-500 text-white px-4 rounded-[10px]"
                onClick={() => doneTask(r.id)}
              >
                done
              </button>
              <button
                className="bg-gray-500 text-white px-4 rounded-[10px] ml-3"
                onClick={() => deleteTask(r.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList4;
