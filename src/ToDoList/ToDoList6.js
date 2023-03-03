import React, { useState, useEffect } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const ToDoList5 = () => {
  const colors = [
    "#82CD47",
    "#FF78F0",
    "#A31ACB",
    "#00FFD1",
    "#00F5FF",
    "#FCE700",
    "#FF6D28",
    "#EA047E",
    "#F0FF42",
  ];
  // const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const [toggle, setToggle] = useState(false);
  const [toggleDel, setToggleDel] = useState(false);
  const [getTasks, setGetTasks] = useState();
  const [deleteTaskById, setDeleteTaskById] = useState();

  //---------------------getTask for Api --------------------//
  const getTaskFromApi = async () => {
    const result = await axios.post("http://localhost:3100/getTask");
    console.log("Tasks from Api", result);
    setGetTasks(result.data);
  };
  useEffect(() => {
    getTaskFromApi();
  }, []);

  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:3100/getTask",
  //   }).then((response) => {
  //     console.log("Data from Api", response.data);
  //     setGetTask2(response.data);
  //   });
  // }, []);

  //-----------------------------------------------------------//

  //------------------CreateTask-----------------------------//

  const createTask = async (task) => {
    const result = await axios.post("http://localhost:3100/createTask", {
      task: task,
    });
    console.log("createTask", result);
    await getTaskFromApi();
  };

  //-------------------------------------------------------------//

  //---------------Done Task---------------//
  const doneTask = async (id) => {
    const result = await axios.post("http://localhost:3100/updateTask", {
      id,
      status: "DONE",
    });
    await getTaskFromApi();
    console.log("doneTask", result.data);
  };
  //------------------------------------------------------//

  //------------------------DeleteTask--------------------//

  const deleteTask = async () => {
    const result = await axios.post("http://localhost:3100/deleteTask", {
      id: deleteTaskById,
    });
    console.log("deleteTaskId", result);
    setDeleteTaskById();
    await getTaskFromApi();
  };

  //--------------------------------------------------------//

  return (
    <div className="mb-14">
      {toggle && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              createTask(e.target[0].value);
              setToggle(false);
            }}
            className="flex flex-col m-auto bg-white p-5 w-2/5 rounded-lg"
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto">เพิ่มโน๊ต</h1>
              <span className="cursor-pointer" onClick={() => setToggle(false)}>
                ปิด
              </span>
            </div>
            <div>
              <textarea
                type="text"
                id="task"
                className="border-2 border-neutral-400 rounded py-2 w-full"
              />
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-sky-300 active:bg-sky-100 rounded w-full font-bold"
              >
                บันทึก
              </button>
            </div>
          </form>
        </div>
      )}

      {toggleDel && (
        <div className="w-full h-screen fixed flex bg-gray-500/30 backdrop-blur-sm">
          <div className="bottom-10 flex flex-col m-auto bg-white p-5 w-2/5 rounded-lg">
            <div className="mb-4 flex justify-between">
              <p className="font-bold flex-auto">ลบโน๊ต</p>
              <button
                className="cursor-pointer"
                onClick={() => setToggleDel(false)}
              >
                ปิด
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  // const newTasks = getTasks.filter((r) => r.id !== deleteId);
                  // updateTasks(newTasks);
                  deleteTask(); // กดยืนยัน เพื่อเรียกฟังก์ชัน deleteTask();
                  setToggleDel(false);
                }}
                className="px-4 py-2 bg-sky-300 active:bg-sky-100 rounded w-full font-bold"
              >
                ยืนยันการลบ
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="px-4 pb-4">
        <div className=" my-3">
          <p className="text-xl">My To/Do List</p>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {getTasks?.map((r, idx) => (
            <div
              key={idx}
              className="rounded px-2 pt-5 pb-2 shadow-lg"
              style={{ backgroundColor: colors[idx % colors.length] }}
            >
              <div
                className={`w-[208px] h-[208px] text-xl ${
                  r.status === "Done" ? "line-through" : ""
                }`}
              >
                {r.task}
              </div>
              {/* <p>status: {r.status}</p> */}
              <div className="flex">
                <div className="text-sm flex-auto">
                  {new Date(r.updatedAt).toLocaleString("TH")}
                </div>
                <div>
                  {r.status === "PENDING" && (
                    <button type="button" onClick={() => doneTask(r.id)}>
                      <BsCheckCircle />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDel(true);
                      setDeleteTaskById(r.id);
                    }}
                    className="pl-2"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => setToggle(true)}
            className="fixed bottom-5 right-5 rounded-full w-12 h-12 bg-sky-400 hover:bg-sky-500 md-lg text-2xl flex items-center shadow-lg"
          >
            <p className="text-center text-white w-full">+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoList5;
