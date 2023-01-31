import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const ToDoList4 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log("_tasks", _tasks);

  const [tasks, setTasks] = useState(_tasks);
  const [togglePopup, setTogglePopup] = useState(false);

  // setState และ useState สร้างเอาไว้ render ที่หน้า web
  // useState() เป็นค่า initial เราสร้าง useState เพื่อคู่กับ map
  // prevenDefault ปกกันการ refresh เวลากรอก form
  // _tasks หรือ tempTasks สร้างตัวแปรชั่วคราว เพื่อนำไปเก็บใน newTasks
  // ?? ใส่เพื่อหากไม่มีค่าให้ return [] เปล่ากลับมา

  const updateTasks = (newTasks) => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(newTasks.sort((a, b) => b.id - a.id))
    );
    setTasks(newTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log("task", e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        id: new Date().getTime(),
        task: e.target["task"].value,
        datetime: new Date(),
        status: "active",
      },
    ];
    updateTasks(newTasks);
  };

  const doneTask = (id) => {
    // const targetTask = tasks.filter((r) => r.id === id)[0];
    // const newTasks = [
    //   ...tasks.filter((r) => r.id !== id),
    //   {
    //     id,
    //     task: targetTask.task,
    //     datetime: targetTask.datetime,
    //     status: "done",
    //   },
    // ];

    const targetTaskIndex = tasks.findIndex((r) => r.id === id);
    const newTasks = [...tasks];
    // console.log("newTasks1", newTasks);
    newTasks[targetTaskIndex].status = "done";
    // console.log("newTasks2", newTasks);

    updateTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id != id);

    updateTasks(newTasks);
  };

  const colorPalletes = ["#E8F3D6", "#FCF9BE", "#FFDCA9", "#FAAB78"];

  return (
    <>
      {togglePopup && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              addTask(e);
              setTogglePopup(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-2/5 rounded-lg"
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto">เพิ่มโน๊ต</h1>
              <span
                className="cursor-pointer"
                onClick={() => setTogglePopup(false)}
              >
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

      {/* ใส่ .task เพื่อดึงข้อมูลใน object ซึ่ง task เป็น key */}
      <div className="w-1/4 border-2 bg-blue-500 h-12 mx-auto mt-5 flex justify-center ">
        <div className="text-2xl font-bold ">My To-Do List</div>
      </div>

      <div className="grid grid-cols-4 gap-4 m-10">
        {tasks?.map((r, idx) => (
          <div
            key={idx}
            className="mt-2 rounded-lg p-4"
            style={{
              backgroundColor: colorPalletes[idx % colorPalletes.length],
            }}
          >
            <div
              className={`h-32 text-black text-2xl ${
                r.status === "done" ? "line-through" : ""
              }`}
            >
              {r.task}
            </div>

            <div className="flex-auto">
              <div>สถานะ:{r.status}</div>
              <div>วันที่:{new Date(r.datetime).toLocaleString("th")}</div>
              <div>
                {r.status === "active" && (
                  <button className="" onClick={() => doneTask(r.id)}>
                    <AiOutlineCheckCircle className="text-green-700 hover:text-green-300 text-2xl" />
                  </button>
                )}
                <button className="" onClick={() => deleteTask(r.id)}>
                  <AiOutlineCloseCircle className="text-red-700 hover:text-red-300 text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setTogglePopup(true)}
        className="fixed bottom-5 right-5 rounded-full w-12 h-12 bg-red-400 hover:bg-amber-400 md-lg text-2xl flex items-center shadow-lg"
      >
        <span className="text-center w-full">+</span>
      </button>
    </>
  );
};

export default ToDoList4;
