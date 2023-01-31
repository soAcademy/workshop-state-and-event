import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ToDoList3 = () => {
  const updateTask = (tasks) => {
    localStorage.setItem("task", JSON.stringify(tasks));
    setTasks(tasks.flat());
  };
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
    ].sort((a, b) => b.id - a.id);
    updateTask(newTasks);
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
          className="bg-red-300 duration-200 rounded p-1 w-16 font-bold hover:bg-red-400 active:bg-red-500"
        >
          Add
        </button>
      </form>
      <div className="m-2 grid grid-cols-4">
        {tasks?.map((task, idx) => (
          <div className="bg-gray-200 m-2 rounded flex flex-col justify-between h-36">
            <div key={idx} className="flex p-2">
              {task.task}
            </div>
            
            <div className="flex justify-between text-xs">
              <span key={idx} className="flex leading-0 items-center px-2">
                {task.datetime}
              </span>
              <div>
                <span>
                  <button
                    className={`text-xl mr-1 duration-500 ${task.status === 'Done' ? 'text-emerald-600' : ''}`}
                    onClick={() => {
                      tasks[idx].status = "Done";
                      updateTask(tasks);
                    }}
                  >
                    <IoMdCheckmarkCircleOutline />
                  </button>
                </span>
                <span>
                  <button className="text-xl mr-2" onClick={() => {
                    const _newTasks = [
                      ...tasks.filter(r=> r.id !== task.id)
                    ]
                    updateTask(_newTasks)
                  }}>
                    <AiOutlineDelete />
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList3;
