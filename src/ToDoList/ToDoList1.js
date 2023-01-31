import React from "react";

const ToDoList1 = () => {
  const addTask = (e) => {
    e.preventDefault();
    const tmpTask = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [...tmpTask, { task: e.target["task"].value }];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="m-3">
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="task" className="border-2 rounded py-2 mr-4" />
        <button type="submit" className="px-4 py-2 bg-sky-400 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoList1;
