import React, { useState, useEffect } from "react";
import { AiFillCheckCircle,AiFillCloseCircle,AiFillDelete } from "react-icons/ai";

const ToDoList5 = () => {
  const colorPalletes = [
    "#008596",
    "#0ca1b2",
    "#3db4c1",
    "#6dc7d1",
    "#5F9EA0",
    "#9ed9e0",
    "#20B2AA",
  ];

  
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(_tasks);
    const [tasks, setTasks] = useState(_tasks);
    const [togglePopup, setTogglePopup] = useState(false);

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
        ..._tasks,
        {
          id: new Date().getTime(),
          task: e.target["task"].value,
          datetime: new Date(),
          status: "active",
        },
      ];
      updateTasks(newTasks);
    };

    const f1 = () => {
      return <div>AAA</div>;
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
      const newTasks = tasks.filter((r) => r.id !== id);
  
      updateTasks(newTasks);
    };
  
    return (
      <>
        <div className="grid grid-cols-5" > 
          {tasks?.map((r, idx) => (
            <div
              key={idx}
              className="mt-2 rounded-lg p-4 m-2"
              style={{backgroundColor: colorPalletes[idx % colorPalletes.length],
              }}
            >
              <div
                className={`h-32 text-white text-2xl ${
                  r.status === "done" ? "line-through" : ""
                }` }
              
              >
                {r.task}
            </div>
            <div className="flex">
                <div className="text-sm text-gray-200 flex-auto" >
                  {new Date(r.datetime).toLocaleString("TH")}
                </div>
                <div>
                  {r.status === "active" && (
                    <button onClick={() => doneTask(r.id)} >
                      <AiFillCheckCircle className="text-white hover:text-gray-300 text-2xl" />
                    </button>
                  )}
                  <button className="" onClick={() => deleteTask(r.id)} >
                      <AiFillDelete className="text-white hover:text-gray-300 text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        {togglePopup && ( 
        <div className="h-screen w-full ml-2xl fixed flex bg-gray-400/30 backdrop-blur-sm" >
          <form onSubmit={(e) => {
            addTask(e);
            setTogglePopup(false);
            
          }}
          className="flex flex-col m-auto bg-white p-5 w-2/5 "
          >
            <div className="mb-4 flex">
              <h1 className="font-bold flex-auto">เพิ่มโน๊ต</h1>
              <span className="cursor-pointer"
                onClick={() => setTogglePopup(false)}
              >
                X
              </span>
            </div>
              <div>
                <textarea
                type="text"
                id="task"
                className="border-4 border-blue-300 rounded py-2 w-full"
              />
              </div>
            <div className="mt-2" >
              <button
                type="submit"
                className="px-10 py-2 bg-sky-300 rounded-2xl w-full font-bold"
              >
                แปะ
              </button>
            </div>
          </form>
        </div>
        )}
        
        </div>
        <button
        onClick={() => setTogglePopup(true)}
        className="fixed bottom-5 right-5 rounded-full w-12 h-12 bg-gradient-to-t
        from-blue-400 to-sky-800 hover:bg-amber-400 md-lg text-2xl flex items-center shadow-lg"
      >
        <span className="text-center w-full">+</span>
      </button>             
      </>
     );
    }; 


  
  export default ToDoList5;





























// const ToDoList5 = () => {
//   return (
//     <div className="px-4">
//       <h1 className="ml-14 text-xl text-left mt-5">บันทึกของฉัน</h1>
//       <div class="ml-14  grid grid-cols-5 grid-flow-row gap-4 my-4">
//         {[...Array(10).keys()].map((id) => (
//           <div
            
//             className="bg-yellow-200 active:bg-yellow-300 text-center py-16 rounded-lg"
//           >
            
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default ToDoList5;