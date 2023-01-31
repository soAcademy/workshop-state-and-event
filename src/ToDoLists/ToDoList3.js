import React, { useState } from "react";

const ToDOList3 = () => {

const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
console.log(_tasks);
const [tasks, setTasks] = useState(_tasks);

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
  ].sort((a, b) =>b.id - a.id);

  localStorage.setItem("tasks", JSON.stringify(newTasks));
  setTasks(newTasks);
};


  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-blue-300 rounded py-2 mr-4"/>
        <button type="submit" className="px-4 py-2 bg-teal-300 rounded">
          {" "} เพิ่ม {""}
        </button>
      </form>
      <div>
        {tasks?.map((r) => (
          <div className="bg-teal-300 mt-2">
            <h1>{r.task}</h1>
            <div>สถานะ:{r.status}</div>
            <div> วันที่: {new Date(r.datetime).toLocaleString('TH')}</div>
{/* อย่าลืมเติม 'TH' เพราะมันแปลงค่าทุกอย่างให้เราเป็นแบบไทยทั้งวันและเดือนปี */}
          </div>
        ))}
      </div>
    </>
  );
};
export default ToDOList3;
