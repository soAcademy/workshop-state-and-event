import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineCheck, AiOutlineClose, AiFillPlusSquare } from "react-icons/ai";



const ToDoList5 = () => {
// Variable box
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(_tasks);
    const [tasks, setTasks] = useState(_tasks);
    const [toggle, setToggle] = useState(false);
    const [showButton, setShowButton] = useState(true);

  // ค่า initial คือค่า false การเรียก function นี้มันทำให้มีการเปลี่ยนแปลงค่า toggle ข้างหน้าอีกที
    // const [toggleDel, setToggleDel] = useState(false);
    const colorPalette = ["#8c77de", "#0ca1b2", "#8e9bbd", "#ffe4e1", "#ff7373", "#b0e0e6","#ffb6c1",];


  // Function box
  const updateTasks = (newTasks) => {
    // console.log(newTasks);
    localStorage.setItem(
      "tasks",
      JSON.stringify(newTasks.sort((a, b) => b.id - a.id))
    );
    setTasks(newTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
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
    const targetTask = tasks.filter((task) => task.id === id)[0];
    // ที่เราใช้ [0] เพราะเราต้องการค่าที่มันเป็น object ตัวแรกที่เรากรองออกมาได้ ก็เลยใส่ไปไว้ข้างหลัง
    const newTasks = [
      ...tasks.filter((r) => r.id !== id),
      {
        id,
        task: targetTask.task,
        datetime: targetTask.datetime,
        status: "done",
      },
    ];
    updateTasks(newTasks);
  };

  // const doneTask = (id) => {
  //   const targetTaskIndex = tasks.findIndex((r) => r.id === id);
  //   const newTasks = [...tasks];
  //   newTasks[targetTaskIndex].status = "done";
  //  updateTasks(newTasks);
  // };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id != id);
    updateTasks(newTasks);
  };

  return (
    <>
      {toggle && (
        <div className="h-full w-full fixed bg-gray-500/30 backdrop-blur-sm z-40">
          <form
            onSubmit={(e) => addTask(e)}
            className="border border-gray-400 w-3/5 p-6 rounded bg-white mx-auto my-48 z-50">
            <div className="flex justify-between">
              <p className="font-bold">Add Note</p>
              <button onClick={() => setToggle(!toggle)}><AiOutlineClose/></button>
            </div>
            <input type="text" id="task" className="border border-gray-300 bg-white rounded my-4 p-4 w-full h-48"/>
            <button type="submit" className="bg-green-200 w-full py-2 font-bold">บันทึก</button>
          </form>
        </div>
      )}
{/* 
      <div className="inset-x-0 bottom-0 h-32">
        <form onSubmit={(e) => addTask(e)}> */}
          {/* <button type="submit" onClick={() => setToggle(!toggle)} className="px-4 py-2 bg-teal-300 rounded">
            เพิ่ม
          </button> */}
        {/* </form>
      </div> */}

      <div className="grid grid-cols-5">
        {tasks?.map((r, idx) => (
          <div
            key={idx}
            className="mt-2 rounded-lg p-4 m-2"
            style={{ backgroundColor: colorPalette[idx % colorPalette.length] }}
          >
            <div className={`h-32 text-xl ${
                r.status === "done" ? "line-through" : ""
              }`}
            />

            <h1> {r.task} </h1>
            <div>สถานะ: {r.status}</div>
            <div> วันที่: {new Date(r.datetime).toLocaleString("TH")}</div>

            <div className="">
              <button className="bg-teal-400 px-4" onClick={() => doneTask(r.id)}><AiOutlineCheck /></button>
              {/* <button className="bg-teal-400 px-4" onClick={() => {doneTask(r.id);setShowButton(false);}}><AiOutlineCheck /></button> */}

              <button className="bg-red-300 px-4" onClick={() => deleteTask(r.id)}><AiFillDelete /></button>
            </div>


          </div>
        ))}
      </div>
    <button type="submit" onClick={() => setToggle(!toggle)} className="px-4 py-2 bg-teal-300 rounded"><AiFillPlusSquare /></button>
    </>
  );
};
export default ToDoList5;