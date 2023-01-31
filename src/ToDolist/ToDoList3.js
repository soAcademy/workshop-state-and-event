import React, { useState, useEffect } from "react";
const ToDoList3 = () => {
  const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
  console.log("_tasks", _tasks);
  const [finalTasks, setFinalTasks] = useState(_tasks);

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
    console.log(e.target["keyTasks"].value);
    const addTime = {
      id: new Date().getTime(),
      valueTask: e.target["keyTasks"].value,
      datetime: new Date(),
      status: "active",
    };
    const newTask = [..._tasks, addTime].sort((a, b) => b.id - a.id);
    localStorage.setItem("keyTasks", JSON.stringify(newTask));
    setFinalTasks(newTask);
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="keyTasks"
          className="bg-teal-300 py-2 rounded-lg"
        />
        <button type="submit" className="bg-cyan-300 py-2">
          Add
        </button>
      </form>
      <div>
        {console.log("finalTasks", finalTasks)}
        {finalTasks?.map((r) => (
          <div className="bg-teal-300 mt-2">
            <h1>{r.valueTask}</h1>
            <div>status:{r.status}</div>
            <div>Date : {new Date(r.datetime).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ToDoList3;
