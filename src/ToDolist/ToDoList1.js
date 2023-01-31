const ToDoList1 = () => {
  const addTask = (e) => {
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("keyTasks")) ?? [];
    console.log(e.target["keyTasks"].value);
    const newTasks = [
      ..._tasks,
      {
        valueTask: e.target["keyTasks"].value,
      },
    ];
    localStorage.setItem("keyTasks", JSON.stringify(newTasks));
  };
  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" id="keyTasks" className="bg-cyan-500 py-2 mr-5"
        />
    
      <button type="submit" className="bg-red-200 px-2 rounded-lg">
        Add
      </button>
      </form>
    </>
  );
};
export default ToDoList1;
