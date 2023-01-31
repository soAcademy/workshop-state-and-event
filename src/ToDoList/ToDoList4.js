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
      ..._tasks,
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
    const targetTask = tasks.filter((t) => t.id === id)[0];
    const newTasks = [
      ...tasks.filter((t) => t.id !== id),
      {
        id,
        task: targetTask.task,
        dateTime: targetTask.dateTime,
        status: "done",
      },
    ];
    updateTasks(newTasks);

    // const targetTaskIndex = tasks.findIndex((t) => t.id === id);
    // const newTask = [...tasks];
    // console.log("newTask1: " , newTasks);
    // newTask[targetTaskIndex].status = "done";
    // log.info("newTask2: " , newTasks);
    // updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((t) => t.id != id);

    updateTasks(newTasks);
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
            <div>Status: {t.status}</div>
            <div>Date: {new Date(t.dateTime).toLocaleString()}</div>
            <div>
              <button
                className="bg-green-300 px-4"
                onClick={() => doneTask(t.id)}
              >
                done
              </button>
              <button
                className="bg-orange-300 px-4"
                onClick={() => deleteTask(t.id)}
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
