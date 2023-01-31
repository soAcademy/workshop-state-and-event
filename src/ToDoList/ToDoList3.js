import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline, IoMdReturnLeft } from "react-icons/io";
import RemoveTaskPopUp from "./RemoveTaskPopUp";

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
  const [isRemovePopUp, setIsRemovePopUp] = useState(false);
  const bgPalettes = ["#00A5Ec", "#8DD7BF", "#FF96C5", "#FF5768", "#FFBF65", '#6C88C4'];
  return (
    <div className="font-kanit m-12">
      <div className="text-2xl underline">To Do List</div>
      <button
        className="bg-red-300 duration-200 rounded-full p-1 w-16 h-16 font-bold 
        hover:bg-red-400 active:bg-red-500 fixed bottom-16 right-16 text-6xl flex 
        justify-center items-center text-white"
        onClick={() => setIsRemovePopUp(!isRemovePopUp)}
      >
        <AiOutlinePlus />
      </button>
      <div className="m-2 grid grid-cols-4">
        {tasks?.map((task, idx) => (
          <div
            style={{ backgroundColor: bgPalettes[idx % bgPalettes.length] }}
            className={`m-2 rounded flex flex-col 
          justify-between h-36`}
          >
            <div key={idx} className="p-2 break-words">
              {task.task}
            </div>
            <div className="flex justify-between text-xs">
              <span key={idx} className="flex leading-0 items-center px-2">
                {task.datetime}
              </span>
              <div className="text-2xl">
                <span>
                  <button
                    className={`mr-1 duration-500 ${
                      task.status === "Done" ? "text-emerald-600" : ""
                    }`}
                    onClick={() => {
                      tasks[idx].status = "Done";
                      updateTask(tasks);
                    }}
                  >
                    <IoMdCheckmarkCircleOutline />
                  </button>
                </span>
                <span>
                  <button
                    className="mr-2"
                    onClick={() => {
                      const _newTasks = [
                        ...tasks.filter((r) => r.id !== task.id),
                      ];
                      updateTask(_newTasks);
                    }}
                  >
                    <AiOutlineDelete />
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RemoveTaskPopUp
        isRemovePopUp={isRemovePopUp}
        setIsRemovePopUp={setIsRemovePopUp}
        addTask={addTask}
      />
    </div>
  );
};

export default ToDoList3;
