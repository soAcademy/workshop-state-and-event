import React, { useState, useEffect } from "react";

const ToDoList1 = () => {
  const [tasks, setTasks] = useState();

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        task: e.target["task"].value,
      },
    ];

    localStorage.setItem("tasks", JSON.stringify(newTasks));
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
          เพิ่ม
        </button>
      </form>
    </>
  );
};

export default ToDoList1;
