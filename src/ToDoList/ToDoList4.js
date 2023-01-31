import { useState } from "react";

const ToDoList4 = () => {
  const [tasks, setTasks] = useState([]);

  const updateTasks = (newTasks) => {
    const sortedNewTasks = newTasks.sort((a, b) => b.id - a.id);

    localStorage.setItem("tasks", JSON.stringify(sortedNewTasks));
    setTasks(sortedNewTasks);
  };

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

    updateTasks([..._tasks, _task]);
  };

  const markDoneTask = (id) => {
    const _tasks = [...tasks];
    const matchedTaskIndex = tasks.findIndex((t) => t.id === id);

    _tasks[matchedTaskIndex].status = "done";
    updateTasks(_tasks);
  };

  const deleteTask = (id) => {
    updateTasks(tasks.filter((t) => t.id !== id));
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
            <div className="text-sm font-bold mb-2">{task.status}</div>
            <button
              onClick={() => markDoneTask(task.id)}
              className="p-2 bg-green-600 mr-2 text-white"
            >
              Done
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 bg-red-600 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList4;
