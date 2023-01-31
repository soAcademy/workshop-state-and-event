import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDoList5 = () => {
  const tmpTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

  const colors = [
    "#F5EA5A",
    "#FF78F0",
    "#A31ACB",
    "#39B5E0",
    "#00F5FF",
    "#FCE700",
    "#FF6D28",
    "#EA047E",
  ];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const [tasks, setTasks] = useState(tmpTasks);
  const [toggle, setToggle] = useState(false);

  const updateTasks = (newTasks) => {
    console.log(newTasks);
    localStorage.setItem(
      "tasks",
      JSON.stringify(newTasks.sort((a, b) => b.id - a.id))
    );
    setTasks(newTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const tmpTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [
      ...tmpTasks,
      {
        id: new Date().getTime(),
        task: e.target["task"].value,
        dateTime: new Date(),
        bgColor: randomColor(),
        status: "Active",
      },
    ];
    updateTasks(newTasks);
  };

  const doneTask = (id) => {
    const targetTask = tasks.filter((r) => r.id === id)[0];
    const newTasks = [
      ...tasks.filter((r) => r.id !== id),
      {
        id: id,
        task: targetTask.task,
        dateTime: targetTask.dateTime,
        bgColor: targetTask.bgColor,
        status: "Done",
      },
    ];
    updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id !== id);
    updateTasks(newTasks);
  };

  return (
    <div>
      {/* {toggle && (
        <div className="w-full h-screen fixed flex bg-zinc-500/50">
          <from
            onSubmit={(e) => {
              addTask(e);
              setToggle(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-3/6 rounded-lg"
          >
            <div className="mb-4 flex justify-between">
              <p className="font-bold flex-auto">เพิ่มโน๊ต</p>
              <button
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                ปิด
              </button>
            </div>
            <div>
              <input
                type="text"
                id="task"
                className="border-2 border-neutral-400 rounded py-2 w-full"
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="px-4 py-3 bg-sky-400 active:bg-sky-600 rounded w-full font-bold"
              >
                บันทึก
              </button>
            </div>
          </from>
        </div>
      )} */}
      {toggle && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              addTask(e);
              setToggle(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-2/5 rounded-lg"
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto">เพิ่มโน๊ต</h1>
              <span className="cursor-pointer" onClick={() => setToggle(false)}>
                ปิด
              </span>
            </div>
            <div>
              <textarea
                type="text"
                id="task"
                className="border-2 border-blue-300 rounded py-2 w-full"
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-red-300 rounded w-full font-bold"
              >
                เพิ่ม
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="px-4 pb-4">
        <div className=" my-3">
          <p className="text-xl">บันทึกของฉัน</p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tasks?.map((r, idx) => (
            <div
              key={idx}
              className="rounded px-2 pt-5 pb-2 shadow-lg"
              style={{ backgroundColor: r.bgColor }}
            >
              <div className="w-[236px] h-[236px]">
                <p
                  className={`text-xl ${
                    r.status === "done" ? "line-through" : ""
                  }`}
                >
                  {r.task}
                </p>
              </div>
              {/* <p>status: {r.status}</p> */}
              <div className="flex content-end">
                <div className="text-sm flex-auto">
                  {new Date(r.dateTime).toLocaleString("TH")}
                </div>
                {r.status === "active" && (
                  <button type="button" onClick={() => doneTask(r.id)}>
                    <BsCheckCircle />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => deleteTask(r.id)}
                  className="pl-2"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setToggle(!toggle)}
            className="fixed bottom-5 right-5 rounded-full w-12 h-12 bg-sky-400 hover:bg-sky-600 shadow-lg"
          >
            <p className="text-white text-5xl">+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList5;
