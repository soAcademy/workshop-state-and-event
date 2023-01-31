import { useState } from "react";

const ToDoList3 = () => {
  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("task")) ?? [];
    const _id = new Date().getTime();
    const _dateTime = new Date();
    const _dateString =
      _dateTime.toLocaleDateString("TH") + " " + _dateTime.toLocaleTimeString();
    const newTasks = [
      ..._tasks,
      {
        id: _id,
        task: e.target[0].value,
        datetime: _dateString,
        status: "Active",
      },
    ].sort((a,b)=> b.id-a.id)
    localStorage.setItem("task", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")));
  return (
    <div className="font-kanit">
      <form onSubmit={addTask}>
        <input
          required
          type="text"
          className="m-2 border-2 px-2 rounded-lg"
          placeholder="Enter Task..."
        ></input>
        <button
          type="submit"
          className="bg-red-400 duration-200 rounded p-2 w-16 font-bold hover:bg-red-500 active:bg-red-400"
        >
          Add
        </button>
      </form>
      <div className="m-2">
        {tasks?.map((task, idx) => (
          <div className="bg-gray-400 m-2 p-2 rounded">
            <div key={idx}>ID : {task.id}</div>
            <div key={idx}>Task : {task.task}</div>
            <div key={idx}>Date time : {task.datetime}</div>
            <div key={idx}>Status : {task.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList3;
