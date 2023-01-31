import React, { useState, useEffect } from "react";

const ToDoList2 = () => {
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log("_tasks",_tasks);
    const [tasks, setTasks] = useState(_tasks);

  const addTask = (e) => {
    // prevenDefault ปกกันการ refresh เวลากรอก form
    e.preventDefault();
    // _tasks สร้างตัวแปรชั่วคราว เพื่อนำไปเก็บใน newTasks
    // ?? ใส่เพื่อหากไม่มีค่าให้ return [] เปล่ากลับมา
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log("task",e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        task: e.target["task"].value,
      },
    ];

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
        {tasks?.map((r) => (
          <div className="bg-yellow-300 mt-2">{r.task}</div>
        ))}
      </div>
    </>
  );
};

export default ToDoList2;
