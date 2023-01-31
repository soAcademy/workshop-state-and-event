import react, { useState, useEffect } from "react";

const ToDoList3 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);
  const [tasks, setTasks] = useState(_tasks); //for mapping/ rendering on screen

  const addTask = (e) => {
    e.preventDefault(); //prevent page refresh
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? []; //get item from "task" //return empty array if no tasks
    //_tasks = temporary tasks
    console.log(e.target["tasks"].value);
    const newTasks = [
      ..._tasks,
      {
        id: new Date().getTime(),
        task: e.target["tasks"].value,
        datetime: new Date(),
        status: "active",
      },
    ].sort((a, b) => b.id - a.id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        {/* submit new tasks to "addTasks" */}
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
          <div className="bg-yellow-300 mt-2 rounded">
            <h1>{r.task}</h1>
            <div>status:{r.status}</div>
            <div>date: {new Date(r.datetime).toLocaleString("TH")}</div>
            {/*{} for rendering in JSX, not as texts*/}
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList3;
