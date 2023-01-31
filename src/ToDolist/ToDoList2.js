import { useState, useEffect } from "react";
const ToDoList2 = () => {
  const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
  console.log(_tasks);
  const [tasks, setTasks] = useState(_tasks);

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
    console.log(e.target["keyTasks"].value);
    const newTasks = [
      ..._tasks, 
      { 
        ValueTask: e.target["keyTasks"].value 
      }
    ];
    localStorage.setItem("keyTasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="keyTasks"
          className="bg-cyan-400 py-2 mr-4 rounded"
        />
        <button type="submit" className="bg-teal-300 px-4 py-2 rounded">
          Add
        </button>
      </form>
      <div>
      {console.log('tasks',tasks)}
      {tasks?.map((r) => (
        <div className="bg-blue-300 py-2">{r.ValueTask}</div>
      ))}
      </div>
    </>
  );
};
export default ToDoList2;
