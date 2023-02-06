import { useState } from "react";

const ToDoList2 = () => {
  const _task = JSON.parse(localStorage.getItem("tasks")) ?? [];
  // console.log(_task);
  const [tasks, setTasks] = useState(_task);

  const onsubmitBtn = (e) => {
    e.preventDefault();

    const _task = JSON.parse(localStorage.getItem("tasks")) ?? [];
    // console.log(_task);

    const newVal = e.target["task"].value;
    // console.log(e.target["task"].value);

    const newTask = [..._task, { task: newVal }];
    localStorage.setItem("tasks", JSON.stringify(newTask));

    setTasks(newTask);

    e.target["task"].value = "";
  };

  return (
    <div className="w-100 h-screen flex justify-center mt-12">
      <div>
        <h1 className="w-full text-center text-2xl mb-4">My ToDoLists</h1>
        <form className="flex gap-4" onSubmit={(e) => onsubmitBtn(e)}>
          <input id="task" type="text" className="border-2 rounded-lg p-2" />
          <button
            type="submit"
            className="rounded-lg bg-green-200 hover:bg-green-300 shadow-md active:shadow-lg p-2"
          >
            Submit
          </button>
        </form>
        <div>
          <ul>
            {tasks.map((r, idx) => (
              <li key={idx} className="bg-yellow-100 rounded-lg p-2 mt-2">
                task: {r.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList2;