import React, { useState, useEffect } from "react";
import { IoIosCheckmarkCircleOutline, IoMdTrash } from "react-icons/io";

const ToDoList5 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);

  const [tasks, setTasks] = useState(_tasks);
  const [toggleShow, setToggleShow] = useState(false);

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
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

    console.log(e.target["task"].value);
    const newTasks = [
      {
        task: e.target["task"].value,
        id: new Date().getTime,
        datetime: new Date(),
        status: "active",
      },
      ..._tasks,
    ];

    updateTasks(newTasks);
  };

  const doneTask = (id) => {
    const targetTask = tasks.filter((r) => r.id === id)[0];
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
  const deleteTask = (id) => {
    const newTasks = tasks.filter((r) => r.id != id);

    updateTasks(newTasks);
  };
  const bgPallets = ["#f6f7d8", "#fcdd8d", "#fd8d41", "#e8c192"];
  return (
    <div className="mx-8">
      {/* <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border-2 border-sky-400 rounded py-2 mr-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 rounded text-white"
        >
          เพิ่ม
        </button>
      </form> */}

      {toggleShow && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-opacity-80">
          <form
            onSubmit={(e) => {
              addTask(e);
              setToggleShow(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-2/5 h-auto rounded-lg"
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto text-xl">Add To do list</h1>
              <span
                className="cursor-pointer"
                onClick={() => setToggleShow(false)}
              >
                X
              </span>
            </div>
            <div>
              <textarea
                type="text"
                id="task"
                className="border-2 border-orange-400 rounded py-10 w-full"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-sky-500 rounded-[20px] w-[100%] font-bold text-white"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mx-5 my-7">
        <h1 className="text-xl flex justify-center bg-orange-300 py-3 text-white rounded-[20px]">
          บันทึกของฉัน
        </h1>
      </div>
      <div className="grid grid-cols-4">
        {tasks?.map((r, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: bgPallets[idx % bgPallets.length] }}
            className="bg-sky-500 mt-3 p-3 w-[200px] h-[200px] rounded-[20px] shadow-lg "
          >
            <div className="text-center pt-6">
              <h1>To do list : {r.task}</h1>
              <div>สถานะ : {r.status}</div>
            </div>
            <div className="my-3">
              {/* <button
                className="bg-green-500 text-white px-4 rounded-[10px]"
                onClick={() => doneTask(r.id)}
              >
                done
              </button>
              <button
                className="bg-gray-500 text-white px-4 rounded-[10px] ml-3"
                onClick={() => deleteTask(r.id)}
              >
                delete
              </button> */}
              <div className="ml-4">
                <div className="pt-8 text-[10px] text-gray-600">
                  วันที่ : {new Date(r.datetime).toLocaleString("TH")}
                </div>
                <div className="flex mt-3 gap-3 ">
                  <button onClick={() => doneTask(r.id)}>
                    <IoIosCheckmarkCircleOutline />
                  </button>
                  <button onClick={() => deleteTask(r.id)}>
                    <IoMdTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mr-8 mt-10">
        <button
          onClick={() => setToggleShow(true)}
          className="px-4 py-2 bg-orange-500 rounded text-white shadow-xl"
        >
          <span className="text-3xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default ToDoList5;
