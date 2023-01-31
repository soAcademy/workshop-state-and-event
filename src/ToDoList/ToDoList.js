import { useState } from "react";
import { FaClock, FaRegCheckCircle, FaTrash, FaPlus } from "react-icons/fa";

const ToDoList = () => {
  const taskPalette = [
    "slate",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];
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
      bgColor: taskPalette[Math.floor(Math.random() * taskPalette.length)],
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
    <div className="relative">
      <ul className="mb-4 flex flex-wrap gap-6 p-0 text-slate-900">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`h-52 w-52 rounded-xl p-4 shadow shadow-slate-500 bg-${task.bgColor}-400`}
          >
            <div className="flex h-full flex-col justify-between">
              <div
                className={`grow text-xl ${
                  task.status === "done" ? "text-slate-700 line-through" : ""
                }`}
              >
                {task.task}
              </div>
              <div className="flex gap-2">
                <div className="flex-auto text-xs">
                  <FaClock className="inline" /> {task.dateTime}
                </div>
                {/* <div className="text-sm font-bold mb-2">{task.status}</div> */}
                {task.status === "active" && (
                  <button onClick={() => markDoneTask(task.id)} className="p-0">
                    <FaRegCheckCircle />
                  </button>
                )}
                <button onClick={() => deleteTask(task.id)} className="p-0">
                  <FaTrash />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => addTask(e)} className="p-0">
        <input type="text" name="task" id="task" />
        <button type="submit" name="submit" className="bg-red-400 p-2">
          Add task
        </button>
      </form>
      <button className="font-4xl absolute right-0 bottom-0 z-50 h-10 w-10 rounded-full bg-emerald-900 p-3 text-white shadow-md shadow-slate-500 hover:bg-emerald-700">
        <FaPlus />
      </button>
    </div>
  );
};

export default ToDoList;
