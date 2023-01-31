import React, { useState, useEffect } from "react";

const ToDoList1 = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    //_tasks ใช้สำหรับครั้งเดียว แทนตัวแปร temp ที่เราใช้งานครั้งเดียว
    //ถ้ามันเป็น undefine ให้สร้าง [] มา เพราะว่าตัว undefine ใช้กับ [...spread operator]
    console.log(e.target["task"].value);
    const newTasks = [..._tasks, { task: e.target["task"].value }];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-sky-500 rounded py-2 mr-4"
        />
        <button type="submit" className="px-4 py-2 bg-green-400 rounded">
          เพิ่ม
        </button>
      </form>
    </>
  );
};

export default ToDoList1;
