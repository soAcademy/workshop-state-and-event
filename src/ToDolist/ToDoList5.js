import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaCheckCircle,FaRegTimesCircle } from "react-icons/fa";

const ToDoList4 = () => {
  const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
  console.log("_tasks :", _tasks);
  const [finalTasks, setFinalTasks] = useState(_tasks);
  const[blur,setBlur] = useState(false);
  const colorPalletes = [
    "#073763",
    "#6fa8dc",
    "#cfe2f3",
    "#de0000",
    "#950000",
   
  ];
  const [popUp, setPopUp] = useState(false);

  const updateTasks = (newTasks) => {
    console.log("updateTasks ;", newTasks);
    localStorage.setItem(
      "keyTasks",
      JSON.stringify(newTasks.sort((a, b) => b.id - a.id))
    );
    setFinalTasks(newTasks);
  };
  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
    console.log("Add Task :", e.target["keyTasks"].value);
    const newTasks = [
      ..._tasks,
      {
        id: new Date().getTime(),
        valueTasks: e.target["keyTasks"].value,
        datetime: new Date(),
        status: "active",
      },
    ];

    updateTasks(newTasks);
  };
  const doneTask = (id) => {
    const targetTask = finalTasks.filter((r) => r.id === id)[0];
    console.log("targetTask :", targetTask);
    const newTasks = [
      ...finalTasks.filter((r) => r.id !== id),
      {
        id,
        valueTasks: targetTask.task,
        datetime: targetTask.datetime,
        status: "done",
      },
    ];

    updateTasks(newTasks);
  };
  const deleteTask = (id) => {
    const newTasks = finalTasks.filter((r) => r.id !== id);
    updateTasks(newTasks);
  };
  return (
    <>
    
    <div className="bg-gradient-to-t from-cyan-600 to-blue-900 w-full min-h-screen  ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-14 place-items-center w-full bg-transparant ">
        {popUp && (
        
          <div className=" fixed top-0 right-0  text-center w-full  backdrop-blur-sm bg-white/30 ">
           

              <form className="flex justify-center my-auto h-screen" onSubmit={(e) => addTask(e)}>
                
                <div className="bg-gradient-to-r from-cyan-500 m-auto to-blue-500 p-4 sm:w-[200px] sm:h-[200px]  md:w-[300px] md:h-[300px] pt-4 px-1 border-5  rounded-lg">
                  <input
                    type="text"
                    id="keyTasks"
                    className="bg-slate-200 pt-2 pb-1 text-xl w-[180px]   md:w-[250px] aspect-[4/3] rounded-lg text-center  "
                  />   
                  <div className="flex flex-row">     
                    <button type="submit" className="px-4 md:py-2 mt-2  bg-gradient-to-r from-teal-300 to-teal-400 rounded w-[150px]  md:w-[200px] ml-2 md:mt-5 mx-auto font-bold hover:shadow-lg ">
                      Add
                    </button>
                    <button 
                      className="bg-transparent w-[50px] md:mt-5"
                      onClick={()=>setPopUp(false)}
                      ><FaRegTimesCircle className="text-red-500 text-2xl hover:text-3xl"/></button>
                  </div>
                </div>           
              </form>

            
          </div>
        )}
        {finalTasks?.map((r, idx) => (
          <div
            className="bg-yellow-300 mt-2  w-[150px] md:w-[250px] aspect-[4/3] p-2  rounded-lg hover:mt-2 hover:mr-2 hover:shadow-lg shadow-white "
            style={{
              backgroundColor: colorPalletes[idx % colorPalletes.length],
            }}
          >
            <div className="h-3/4 font-bold text-white">
              <h1>{r.valueTasks}</h1>
            </div>
            <div className="  text-base text-white">
              Status: {r.status}
            </div>
            <div className="flex flex-cols  w-full">
              <div className=" text-xs text-white w-2/3 ">
                {new Date(r.datetime).toLocaleDateString()}
              </div>
              <div className=" text-right place-self-end flex flex-cols w-1/3 ">
                <button className=" px-1 " onClick={() => doneTask(r.id)}>
                  <FaCheckCircle className="text-green-500" />
                </button>
                <button className="  px-1" onClick={() => deleteTask(r.id)}>
                  <FaTrashAlt className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" fixed bottom-5 right-5 px-5 w-full grid justify-items-stretch bg-transparant ">
        <div
          className=" grid place-items-center bg-teal-500 rounded-full h-[50px] w-[50px] text-white grid justify-self-end mr-4 mb-5 "
          onClick={() => setPopUp(!popUp)}
        >
          Add
        </div>
      </div>
      {console.log("popUp :", popUp)}
      </div>
      
    </>
  );
};
export default ToDoList4;
