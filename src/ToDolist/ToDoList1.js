const ToDoList1 = () => {
  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    console.log(e.target["task"].value);
    const newTasks = [
      ..._tasks,
      {
        task: e.target["task"].value,
      },
    ];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="task" className="bg-cyan-500 py-2 mr-5"
        />
    
      <button type="submit" className="bg-red-200 px-2 rounded-lg">
        Add
      </button>
      </form>
    </>
  );
};
export default ToDoList1;
