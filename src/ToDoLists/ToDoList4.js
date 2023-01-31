import { useState } from "react";

const ToDoList4 = () => {
  const _task = JSON.parse(localStorage.getItem("tasks")) ?? [];
  // console.log(_task);
  const [tasks, setTasks] = useState(_task);

  const onsubmitBtn = (e) => {
    e.preventDefault();

    const _task = JSON.parse(localStorage.getItem("tasks")) ?? [];
    // console.log(_task);

    const newVal = e.target["task"].value;
    // console.log(e.target["task"].value);

    const newTask = [
      ..._task,
      {
        id: crypto.randomUUID(),
        dateTime: new Date(),
        task: newVal,
        status: "active",
      },
    ];

    savOnLocalSt(newTask);

    e.target["task"].value = "";
  };

  const savOnLocalSt = (arrTasks) => {
    const activeArr = arrTasks
      .filter((r) => r.status === "active")
      .sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      );
    // console.log(activeArr);

    const doneArr = arrTasks
      .filter((r) => r.status === "done")
      .sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      );

    // console.log(arrTasks);
    const newTasks = [...activeArr, ...doneArr];
    // console.log(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTasks(newTasks);
  };

  const updateTask = (id) => {
    // console.log(id);
    // console.log(tasks);
    const data = tasks.find((r) => r.id === id);
    // console.log(data);
    data.status = "done";
    // console.log(data);

    // console.log(tasks);
    const filterTasksOut = tasks.filter((r) => r.id !== id);
    // console.log(filterTasksOut);
    const newArrTasks = [...filterTasksOut, data];
    // console.log(newArrTasks);

    savOnLocalSt(newArrTasks);
  };

  const deleteTask = (id) => {
    console.log(id);

    const filterTasksOut = tasks.filter((r) => r.id !== id);
    console.log(filterTasksOut);
    savOnLocalSt(filterTasksOut);
  };

  return (
    <div className="w-100 h-screen flex justify-center mt-12">
      <div>
        <h1 className="w-full text-center text-2xl mb-4">My ToDoLists</h1>
        <form
          className="flex justify-center gap-4 mb-12"
          onSubmit={(e) => onsubmitBtn(e)}
        >
          <input id="task" type="text" className="border-2 rounded-lg p-2" />
          <button
            type="submit"
            className="rounded-lg bg-green-200 hover:bg-green-300 shadow-md active:shadow-lg p-2"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-wrap gap-8">
          {tasks.map((r, idx) => (
            <div
              key={idx}
              className={
                `rounded-lg shadow-md p-4 mt-2 ` +
                (r.status === "active" ? `bg-yellow-100` : `bg-gray-200`)
              }
            >
              <div className="flex flex-col gap-2">
                <div className="text-sm font-thin">
                  {new Date(r.dateTime).toLocaleString("TH")}
                </div>
                <div className="flex justify-center text-xl py-8">
                  <p className={r.status === "done" && `line-through`}>
                    {r.task}
                  </p>
                </div>
                <div className="flex gap-2 justify-between">
                  <button
                    onClick={() => updateTask(r.id)}
                    className="rounded-lg bg-green-300 hover:bg-green-400 p-2"
                  >
                    {r.status}
                  </button>
                  <button
                    onClick={() => deleteTask(r.id)}
                    className="rounded-lg bg-red-300 hover:bg-red-400 p-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList4;
