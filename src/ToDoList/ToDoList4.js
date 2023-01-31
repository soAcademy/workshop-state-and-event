import React, { useState } from "react";

const ToDoList4 = () => {
  const tmpTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  const [tasks, setTasks] = useState(tmpTasks);

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
    const tmpTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [
      ...tmpTasks,
      {
        id: new Date().getTime(),
        task: e.target["task"].value,
        dateTime: new Date(),
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
        dateTime: targetTask.dateTime,
        status: "Done",
      },
    ];
    updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id != id);
    updateTasks(newTasks);
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
          <div className="mt-2 bg-rose-400 rounded pl-2 py-1">
            <p>{r.task}</p>
            <p>status: {r.status}</p>
            <p>Date: {new Date(r.dateTime).toLocaleString("TH")}</p>
            <div className="pb-1 my-1">
              <button
                type="button"
                onClick={() => doneTask(r.id)}
                className="bg-rose-200 rounded p-1"
              >
                Done
              </button>
              <button
                type="button"
                onClick={() => deleteTask(r.id)}
                className="bg-rose-200 rounded p-1 ml-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList4;
