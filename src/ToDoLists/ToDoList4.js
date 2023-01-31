import { useState } from "react";
import { FaClipboardCheck, FaTrash, FaPlus, FaTimes } from "react-icons/fa";

const ToDoList4 = () => {
  const _task = JSON.parse(localStorage.getItem("tasks")) ?? [];
  // console.log(_task);
  const [tasks, setTasks] = useState(_task);
  const [toggle, setToggle] = useState(false);

  const colorPallet = ["#79b473", "#70A37F", "#41658A", "#414073", "#4C3957"];

  const onsubmitBtn = (e) => {
    e.preventDefault();

    const _task = JSON.parse(localStorage.getItem("tasks")) ?? [];
    // console.log(_task);

    const newVal = e.target["task"].value;
    // console.log(e.target["task"].value);

    const newTask = [
      ..._task,
      {
        id: crypto.randomUUID(),
        dateTime: new Date(),
        task: newVal,
        status: "active",
      },
    ];

    savOnLocalSt(newTask);

    e.target["task"].value = "";
  };

  const savOnLocalSt = (arrTasks) => {
    const activeArr = arrTasks
      .filter((r) => r.status === "active")
      .sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      );
    // console.log(activeArr);

    const doneArr = arrTasks
      .filter((r) => r.status === "done")
      .sort(
        (a, b) =>
          new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
      );

    // console.log(arrTasks);
    const newTasks = [...activeArr, ...doneArr];
    // console.log(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTasks(newTasks);
    setToggle(false);
  };

  const updateTask = (id) => {
    // console.log(id);
    // console.log(tasks);
    const data = tasks.filter((r) => r.id === id);
    const data0 = data[0];
    // console.log(data0);

    const filterTasksOut = tasks.filter((r) => r.id !== id);
    // console.log(filterTasksOut);
    const newArrTasks = [
      ...filterTasksOut,
      {
        id: data0.id,
        dateTime: data0.dateTime,
        task: data0.task,
        status: "done",
      },
    ];
    // console.log(newArrTasks);

    savOnLocalSt(newArrTasks);
  };

  const deleteTask = (id) => {
    console.log(id);

    const filterTasksOut = tasks.filter((r) => r.id !== id);
    console.log(filterTasksOut);
    savOnLocalSt(filterTasksOut);
  };

  return (
    <div className="w-full h-100">
      <div>
        <h1 className="w-full text-center text-2xl mt-8">My ToDoLists</h1>
        <div className="w-full h-100 flex justify-center p-8">
          <div className="w-full grid grid-col-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {tasks.map((r, idx) => (
              <div
                key={idx}
                className="max-w-[250px] h-[250px] rounded-lg shadow-lg text-sm p-4 mt-2"
                style={{
                  backgroundColor:
                    colorPallet[
                      Math.floor(Math.random() * (colorPallet.length - 1))
                    ],
                }}
              >
                <div className="h-full flex flex-col gap-2 text-white">
                  <div className="h-[80%] flex text-xl">
                    <p className={r.status === "done" ? `line-through` : ``}>
                      {r.task}
                    </p>
                  </div>
                  <div className="h-[20%] flex gap-2 justify-between items-end">
                    <div className="text-xs font-thin">
                      {new Date(r.dateTime).toLocaleString("TH")}
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => updateTask(r.id)} className="">
                        <FaClipboardCheck className="text-lg" />
                      </button>
                      <button onClick={() => deleteTask(r.id)} className="">
                        <FaTrash className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="w-[50px] h-[50px] fixed bottom-8 right-8 z-40 flex items-center justify-center bg-green-300 active:bg-green-400 text-white rounded-full shadow-lg"
        onClick={() => setToggle(true)}
      >
        <FaPlus className="text-lg" />
      </button>

      {toggle && (
        <div className="fixed top-0 left-0 right-0 w-full h-screen backdrop-blur-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[350px] z-30 flex items-center justify-center border-2 bg-white rounded-lg shadow-xl p-8">
            <form
              className="flex flex-col justify-center items-center gap-8"
              onSubmit={(e) => onsubmitBtn(e)}
            >
              <h1 className="text-2xl font-bold">Add a new ToDoList</h1>
              <input
                id="task"
                type="text"
                className="w-full border-2 rounded-lg p-2"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-green-200 hover:bg-green-300 shadow-md active:shadow-lg p-2"
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setToggle(false)}
              className="absolute top-4 right-4"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList4;
