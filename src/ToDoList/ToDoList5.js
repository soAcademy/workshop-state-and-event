import React, { useState, useEffect } from "react";
import { IoIosCheckmarkCircleOutline, IoMdTrash } from "react-icons/io";

const ToDoList5 = () => {
  const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
  console.log(_tasks);

  const [tasks, setTasks] = useState(_tasks);
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleConfirmDelete, setToggleConfirmDelete] = useState(false);
  const [chooseDelete, setChooseDelete] = useState(null);

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
        id: new Date().getTime(),
        datetime: new Date(),
        status: "active",
      },
      ..._tasks,
    ];
    updateTasks(newTasks);
  };

  const doneTask = (id) => {
    const targetTask = tasks.find((r) => r.id === id);
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
  const deleteTask = () => {
    const newTasks = tasks.filter((r) => r.id != chooseDelete);
    // filter ออกมาแค่อันที่เราจะไม่ลบ แล้วเอาไปทับอันเดิม
    updateTasks(newTasks);
    setToggleConfirmDelete(false);
    setChooseDelete(null);
  };
  const openConfirmDelete = (id) => {
    setToggleConfirmDelete(true);
    setChooseDelete(id);
  };

  const closeConfirmDelete = () => {
    setToggleConfirmDelete(false);
    setChooseDelete(null);
  };

  const bgPallets = ["#f6f7d8", "#fcdd8d", "#fd8d41", "#e8c192"];
  return (
    <div className="mx-auto w-[90%]">
      {/* popup confirm delete card */}
      {toggleConfirmDelete && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center  bg-gray-500/30 backdrop-opacity-80">
          <div className="bg-white h-[120px] w-2/6 p-5">
            <div className="flex justify-between">
              <div>ลบโน๊ต ?</div>
              <button
                onClick={() => closeConfirmDelete()}
                className="text-red-600 "
              >
                ปิด
              </button>
            </div>
            <button
              onClick={() => deleteTask()}
              className="mt-6 w-full bg-orange-500 text-white p-2 rounded-lg"
            >
              ยืนยันการลบ
            </button>
          </div>
        </div>
      )}
      {/* popup confirm delete card end ###*/}

      {/* pop up create card memo */}
      {toggleShow && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex bg-gray-500/30 backdrop-opacity-80">
          <form
            onSubmit={(e) => {
              addTask(e);
              setToggleShow(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-2/5 h-auto rounded-lg"
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto text-xl text-orange-600">
                Add To do list
              </h1>
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
                className="border-2 border-orange-400 rounded p-2 h-[150px] w-full"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 rounded-[20px] w-[100%] font-bold text-white"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      )}
      {/* pop up create card memo end ####*/}

      {/* show memo zone */}
      <div className="my-7">
        <h1 className="text-xl flex justify-center bg-orange-300 py-3 text-white rounded-[20px]">
          บันทึกของฉัน
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {tasks?.map((r, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: bgPallets[idx % bgPallets.length] }}
            className=" p-3 w-[200px] h-[200px] rounded-[20px] shadow-lg "
          >
            <div className="text-center pt-6">
              <h1 className={r.status === "done" ? "line-through" : ""}>
                To do list : {r.task}
              </h1>
              <div className={r.status === "done" ? "line-through" : ""}>
                สถานะ : {r.status}
              </div>
            </div>
            <div className="my-3">
              <div className="ml-4 ">
                <div className="pt-8 text-[10px] text-gray-600">
                  วันที่ : {new Date(r.datetime).toLocaleString("TH")}
                </div>
                <div className="flex mt-3 gap-3 ">
                  <button
                    hidden={r.status === "done" ? true : false}
                    onClick={() => doneTask(r.id)}
                  >
                    <IoIosCheckmarkCircleOutline
                      fontSize={"1.5rem"}
                      color="green"
                    />
                  </button>
                  <button onClick={() => openConfirmDelete(r.id)}>
                    <IoMdTrash fontSize={"1.5rem"} />
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
      {/* show memo zone #####*/}
    </div>
  );
};

export default ToDoList5;
