const ToDoList1 = () => {
  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e);
    console.log(e.target["task"].value);

    const newTasks = [
      ..._tasks,
      {
        task: e.target["task"].value,
      },
    ];
    console.log(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          id="task"
          className="border border-black rounded m-4 p-2"
        />
        <button type="submit" className="m-4 p-2 bg-blue-300 rounded">
          Add
        </button>
      </form>
    </>
  );
};
export default ToDoList1;
