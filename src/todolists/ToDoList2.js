import react, { useState, useEffect } from "react";

const ToDoList2 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);
  const [tasks, setTasks] = useState(_tasks);

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["tasks"].value);
    const newTasks = [
      ..._tasks,
      {
        task: e.target["tasks"].value,
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="tasks"
          className="mr-4 py-2 border-2 border-blue-300"
        />
        <button type="submit" className="px-4 py-2 bg-red-300 rounded ">
          เพิ่ม
        </button>
      </form>
      <div>
        {tasks?.map((r) => (
          <div className="bg-yellow-300 mt-2 rounded">{r.task}</div>
        ))}
      </div>
    </>
  );
};

export default ToDoList2;
