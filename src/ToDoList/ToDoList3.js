import React, { useState, useEffect } from "react";

const ToDoList3 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log("_tasks", _tasks);
  const [tasks, setTasks] = useState(_tasks);
  // useState() เป็นค่า initial เราสร้าง useState เพื่อคู่กับ map
  const addTask = (e) => {
    // prevenDefault ปกกันการ refresh เวลากรอก form
    e.preventDefault();
    // _tasks สร้างตัวแปรชั่วคราว เพื่อนำไปเก็บใน newTasks
    // ?? ใส่เพื่อหากไม่มีค่าให้ return [] เปล่ากลับมา
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
    ].sort((a, b) => b.id - a.id);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-blue-300 rounded py-2 mr-4"
        />
        <button type="submit" className="px-4 py-2 bg-red-300 rounded">
          เพิ่ม
        </button>
      </form>
      <div>
        {/* ใส่ .task เพื่อดึงข้อมูลใน object ซึ่ง task เป็น key*/}
        {tasks?.map((r) => (
          <div className="bg-yellow-300 mt-2">
            <h1>{r.task}</h1>
            <div>สถานะ:{r.status}</div>
            <div>วันที่:{new Date(r.datetime).toLocaleString("th")}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList3;
