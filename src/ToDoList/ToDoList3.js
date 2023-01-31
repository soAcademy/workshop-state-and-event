import React, { useState, useEffect } from "react";

const ToDoList3 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? []; //*
  console.log(_tasks); //*
  const [tasks, setTasks] = useState(_tasks); //*

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    //_tasks ใช้สำหรับครั้งเดียว แทนตัวแปร temp ที่เราใช้งานครั้งเดียว
    //ถ้ามันเป็น undefine ให้สร้าง [] มา เพราะว่าตัว undefine ใช้กับ [...spread operator]
    console.log(e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        task: e.target["task"].value,
        id: new Date().getTime,
        datetime: new Date(),
        status: "active",
      },
    ].sort((a, b) => b.id - a.id);
    //ถ้าทำแบบสร้างตัวแปร = [..._tasks, task1];
    // ...เอาข้อมูลมาเรียงต่อกันโดยถอด [] of {} ออก
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-sky-500 rounded py-2 mr-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 rounded text-white"
        >
          เพิ่ม
        </button>
      </form>
      <div>
        {tasks?.map((r) => (
          <div className="bg-sky-500 mt-2 text-white p-3 shadow-lg">
            <h1>TODO:{r.task}</h1>
            <div>สถานะ: {r.status}</div>
            <div>วันที่: {new Date(r.datetime).toLocaleString("TH")}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList3;
