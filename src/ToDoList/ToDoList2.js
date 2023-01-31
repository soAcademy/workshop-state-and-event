import React, { useState } from "react";

const ToDoList2 = () => {
  const tmpTask = JSON.parse(localStorage.getItem("tasks")) ?? [];
  const [tasks, setTasks] = useState(tmpTask);
  const addTask = (e) => {
    e.preventDefault();
    const tmpTask = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [...tmpTask, { task: e.target["task"].value }];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <div className="m-3">
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="task" className="border-2 rounded py-2 mr-4" />
        <button type="submit" className="px-4 py-2 bg-sky-400 rounded">
          Add
        </button>
      </form>
      <div>
        {tasks?.map((r) => (
          <div className="mt-2 bg-emerald-300 rounded pl-2 py-1">{r.task}</div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList2;
