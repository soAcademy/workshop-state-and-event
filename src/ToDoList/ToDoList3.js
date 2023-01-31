import { useState } from "react";

const ToDoList3 = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    // console.log(e.target.task.value);
    const _task = {
      id: new Date().getTime(),
      task: e.target.task.value,
      dateTime: new Date().toLocaleString("TH"),
      status: "active",
    };
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    localStorage.setItem("tasks", JSON.stringify([..._tasks, _task]));
    setTasks([..._tasks, _task].sort((a, b) => b.id - a.id));
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)} className="p-4">
        <input type="text" name="task" id="task" />
        <button type="submit" name="submit" className="p-2 bg-red-400">
          Add task
        </button>
      </form>
      <ul className="p-4">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 bg-orange-400 mb-2">
            <div className="text-xl">{task.task}</div>
            <div className="text-sm">{task.dateTime}</div>
            <div className="text-sm font-bold">{task.status}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList3;
