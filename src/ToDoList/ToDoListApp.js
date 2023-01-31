import { useState, useEffect } from "react";

const ToDoListApp = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );
  const [counter, setCounter] = useState(localStorage.getItem("counter") ?? 0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [JSON.stringify(tasks)]);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div className="bg-gray-400 m-6 rounded-lg p-6 font-kanit">
      <div className="flex justify-center">
        <p className="text-center font-bold text-2xl underline bg-gray-500 rounded p-4">
          TO DO LIST
        </p>
      </div>
      <form
        className="m-6 space-x-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          const value = document.querySelector("#input");
          const dateTime = new Date();
          const dateString =
            dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
          const tasksArray = [
            tasks,
            {
              id: Number(counter) + 1,
              datetime: dateString,
              status: "To-Do",
              task: value.value,
            },
          ];
          setCounter(Number(counter) + 1);
          localStorage.setItem("tasks", JSON.stringify(tasksArray.flat()));

          setTasks(JSON.parse(localStorage.getItem("tasks")));
        }}
      >
        <input
          id="input"
          type="text"
          placeholder="Enter Task ..."
          className="border-2 rounded-lg px-2 w-full"
          required
        />
        <button type="submit" className="p-2 rounded-lg w-28 bg-gray-300">
          Add task
        </button>
      </form>
      <div className="w-full px-5">
        {tasks?.map((e, idx) => {
          return (
            <div className="flex justify-between border-b py-4">
              <div className={`font-semibold ${e.status === 'Done' ? 'line-through' : ""}`}>
                <div className="text-xl font-bold">Task: {e.task}</div>
                <div>ID: {e.id}</div>
                <div>Time: {e.datetime}</div>
                <div>
                  <span>Status:</span>{" "}
                  <span
                    className={`px-2  rounded duration-500 ${
                      e.status === "Done" ? "bg-green-300" : "bg-red-300 w-fit"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
              </div>
              <div className="flex">
                <button
                  className={`p-4 my-auto mx-2 rounded  duration-500 shadow-mg ${e.status === 'Done' ? "bg-gray-600 cursor-auto" : "bg-green-400 hover:bg-green-500 hover:shadow-lg"}`}
                  onClick={() => {
                    tasks[idx].status = "Done";
                    setTasks(tasks.flat());
                  }}
                >
                  Done
                </button>
                <button
                  className="p-4 my-auto mx-2 rounded bg-red-400"
                  onClick={() => {
                    setTasks([...tasks.slice(0, idx), ...tasks.slice(idx + 1)]);
                  }}
                >
                  ลบ
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoListApp;
