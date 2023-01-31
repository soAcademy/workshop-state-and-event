const ToDoList1 = () => {
  const onsubmitBtn = (e) => {
    e.preventDefault();

    const _task = JSON.parse(localStorage.getItem("task")) ?? [];
    console.log(_task);

    const newVal = e.target["task"].value;
    console.log(e.target["task"].value);

    const newTask = [..._task, { task: newVal }];
    localStorage.setItem("task", JSON.stringify(newTask));

    e.target["task"].value = "";
  };

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <form className="flex gap-4" onSubmit={(e) => onsubmitBtn(e)}>
        <input id="task" type="text" className="border-2 rounded-lg p-2" />
        <button
          type="submit"
          className="rounded-lg bg-green-200 hover:bg-green-300 shadow-md active:shadow-lg p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ToDoList1;
