import React, { useState, useEffect } from "react";

const ToDoList3 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);
  const [tasks, setTasks] = useState(_tasks);

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        id: new Date().getTime(),
        task: e.target["task"].value,
        dateTime: new Date(),
        status: "active",
      },
    ].sort((a, b) => b.id - a.id);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-blue-300 rounded py-2 mr-4"
        />
        <button type="submit" className="px-4 py-2 bg-red-300 rounded">
          Add
        </button>
      </form>
      <div>
        {tasks?.map((t) => (
          <div className="bg-yellow-300 mt-2">
            <h1>{t.task}</h1>
            <div>Status:{t.status}</div>
            <div>Date: {new Date(t.dateTime).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList3;
