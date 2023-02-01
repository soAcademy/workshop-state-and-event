import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline, IoMdReturnLeft } from "react-icons/io";
import AddTaskPopUp from "./AddTaskPopUp";
import RemoveTaskPopUp from "./RemoveTaskPopUp";

const ToDoList3 = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")));
  const [isRemovePopUp, setIsRemovePopUp] = useState(false);
  const [isAddPopUp, setIsAddPopUp] = useState(false);
  const [deleteId, setDeleteId] =useState()
  const bgPalettes = [
    "#00A5Ec",
    "#8DD7BF",
    "#FF96C5",
    "#FF5768",
    "#FFBF65",
    "#6C88C4",
  ];
  const updateTasks = (tasks) => {
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
    updateTasks(newTasks);
  };
  return (
    <div className="font-kanit m-12">
      <div className="text-2xl underline">To Do List</div>
      <button
        className="bg-red-300 duration-200 rounded-full p-1 w-16 h-16 font-bold 
        hover:bg-red-400 active:bg-red-500 fixed bottom-16 right-16 text-6xl flex 
        justify-center items-center text-white"
        onClick={() => setIsAddPopUp(!isAddPopUp)}
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
            <div key={idx} className={`p-2 break-words ${task.status === 'Done' ? 'line-through ' : ''}`}>
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
                      updateTasks(tasks);
                    }}
                  >
                    <IoMdCheckmarkCircleOutline />
                  </button>
                </span>
                <span>
                  <button
                    className="mr-2"
                    onClick={() => {  
                      setIsRemovePopUp(!isRemovePopUp)
                      setDeleteId(task.id)
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

      <div
        className={`flex justify-center items-center fixed 
        top-0 left-0 h-full w-full duration-300 ${
          isRemovePopUp ? "scale-1" : "scale-0"
        }`}
      >
        <RemoveTaskPopUp
          isRemovePopUp={isRemovePopUp}
          setIsRemovePopUp={setIsRemovePopUp}
          updateTasks={updateTasks}
          tasks={tasks}
          deleteId={deleteId}
        />
      </div>
      <div className={`flex justify-center items-center fixed 
        top-0 left-0 h-full w-full duration-300
        ${isAddPopUp ? "scale-1" : "scale-0"}`}>
        <AddTaskPopUp
          isAddPopUp={isAddPopUp}
          setIsAddPopUp={setIsAddPopUp}
          addTask={addTask}
        />
      </div>
    </div>
  );
};

export default ToDoList3;
