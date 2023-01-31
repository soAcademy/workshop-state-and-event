import React, {useState} from "react";

const ToDoList4 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  // console.log(_tasks);
  const [tasks, setTasks] = useState(_tasks);

  const updateTasks = (newTasks) => {
    // console.log(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks.sort((a,b) => b.id - a.id)));
    setTasks(newTasks);
  };

  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks =[..._tasks,
    {
      id: new Date().getTime(),
      task: e.target["task"].value,
      datetime: new Date(),
      status: "active",
    },
    ]; updateTasks(newTasks);
  };

  const doneTask = (id) => {
    const targetTask = tasks.filter((task) => task.id === id)[0];
  // ที่เราใช้ [0] เพราะเราต้องการค่าที่มันเป็น object ตัวแรกที่เรากรองออกมาได้ ก็เลยใส่ไปไว้ข้างหลัง
    const newTasks = [...tasks.filter((r) => r.id !== id),
      {
        id,
        task: targetTask.task,
        datetime: targetTask.datetime,
        status: "done",
      },
    ];updateTasks(newTasks);
  };
  
  // const doneTask = (id) => {
  //   const targetTaskIndex = tasks.findIndex((r) => r.id === id);
  //   const newTasks = [...tasks];
  //   newTasks[targetTaskIndex].status = "done";
  //  updateTasks(newTasks);
  // };

  const deleteTask =(id) => {
    const newTasks = tasks.filter((r) => r.id !=id);
    updateTasks(newTasks);
  };



  return (
<>
    <form onSubmit={(e) => addTask(e)}>
      <input type="text" id="task" className="border-2 borer-blue-300 rounded py-2 px-2 mr-4"></input>
      <button type="submit" className="px-4 py-2 bg-teal-300 rounded">{""} เพิ่ม {""}</button>
    </form>

    <div>
      {tasks?.map((r) => (
        <div className="bg-teal-300 mt-2">
          <h1> {r.task} </h1>
          <div>สถานะ: {r.status}</div>
          <div> วันที่: {new Date(r.datetime).toLocaleString('TH')}</div>
        <div>
        <button className="bg-teal-400 px-4" onClick={()=> doneTask(r.id)}>done</button>
        <button className="bg-red-300 px-4" onClick={() => deleteTask(r.id)}>delete</button>
        </div>
        </div>
      ))}
    </div>
</>
  );
};

export default ToDoList4;