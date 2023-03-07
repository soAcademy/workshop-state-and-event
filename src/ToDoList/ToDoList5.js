import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import axios from "axios";

const ToDoList5 = () => {
  const [tasks, setTasks] = useState();
  const [toggle, setToggle] = useState(false);
  const [toggleDel, setToggleDel] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [dummy, setDummy] = useState(false);

  useEffect(() => {
    const config = {
      method: "post",
      url: "http://localhost:3100/function/getTasks",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("get task", response.data);
        setTasks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dummy]);

  const addTask = (e) => {
    e.preventDefault();
    console.log("e add task", e.target[1].value);
    const data = {
      task: e.target[1].value,
    };
    console.log("data", data);
    const config = {
      method: "post",
      url: "http://localhost:3100/function/createTask",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDummy(!dummy);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const doneTask = (id) => {
    console.log("done id", id);
    const data = {
      id: id,
      status: "DONE",
    };
    console.log("data doneTask", data);
    const config = {
      method: "post",
      url: "http://localhost:3100/function/updateTaskStatus",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDummy(!dummy);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteTask = (id) => {
    console.log("delete id", id);
    const data = {
      id: id,
    };
    console.log("data deleteTask", data);
    const config = {
      method: "post",
      url: "http://localhost:3100/function/deleteTasks",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setDummy(!dummy);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const bgPallette = ["#FFAEBC", "#A0E7E5", "#B4F8C8", "#FBE7C6"];

  return (
    <>
      {toggle && (
        <div className="h-full w-full fixed bg-gray-500/30 backdrop-blur-sm z-40">
          <form
            onSubmit={(e) => addTask(e)}
            className="border border-gray-400 w-3/5 p-6 rounded bg-white mx-auto my-48 z-50"
          >
            <div className="flex justify-between">
              <p className="font-bold">Add Note</p>
              <button onClick={() => setToggle(!toggle)}>
                <AiOutlineClose />
              </button>
            </div>
            <input
              type="text"
              id="task"
              className="border border-gray-300 bg-white rounded my-4 p-4 w-full h-48"
              required
              placeholder="Type task ...."
            />
            <button
              type="submit"
              className="bg-green-200 w-full py-2 font-bold"
              // onClick={() => setToggle(!toggle)}
            >
              บันทึก
            </button>
          </form>
        </div>
      )}

      {toggleDel && (
        <div className="w-full fixed bg-gray-500/30 backdrop-blur-sm h-full z-10">
          <div
            className="border border-gray-400 w-3/5 p-6 rounded mx-auto my-60
            bg-white"
          >
            <div className="flex justify-between">
              <p className="font-bold">Delete Note</p>
              <button onClick={() => setToggleDel(!toggleDel)}>
                <AiOutlineClose />
              </button>
            </div>
            <button
              className="bg-green-200 w-full py-2 font-bold mt-6"
              onClick={() => {
                setToggleDel(!toggleDel);
                deleteTask(deleteId);
              }}
            >
              ยืนยันการลบ
            </button>
          </div>
        </div>
      )}

      <h1 className="text-4xl font-bold mx-4 pt-4"> TO DO LIST! </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 m-4 z-30">
        {tasks?.map((r, idx) => (
          <div>
            <div
              className="rounded-xl px-4 pt-4 border border-gray-300 drop-shadow-xl h-48 flex flex-col justify-between"
              key={idx}
              style={{ backgroundColor: bgPallette[idx % bgPallette.length] }}
            >
              {r.status === "PENDING" ? (
                <h1 className="font-bold text-xl">{r.task}</h1>
              ) : (
                <h1 className="font-bold text-xl line-through">{r.task}</h1>
              )}
              <div className="flex justify-between mb-2 items-end">
                <div className="text-sm">
                  {new Date(r.createdAt).toLocaleDateString()}
                </div>
                <div className="flex justify content-end">
                  <button
                    className="mt-2 mx-2 pt-2 pb-1"
                    onClick={() => doneTask(r.id)}
                  >
                    <AiOutlineCheckCircle />
                  </button>
                  <button
                    className="mt-2 mx-2 pt-2 pb-1"
                    onClick={() => {
                      setDeleteId(r.id);
                      setToggleDel(!toggleDel);
                    }}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-end flex mr-8">
        <button
          className="px-4 py-2 rounded text-6xl"
          onClick={() => setToggle(!toggle)}
        >
          <HiPlus />
        </button>
      </div>
    </>
  );
};

export default ToDoList5;
