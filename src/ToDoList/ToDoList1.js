const ToDoList1 = () => {
  const addTask = (e) => {
    e.preventDefault();
    // console.log(e.target.task.value);
    const _task = e.target.task.value;
    const _tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    localStorage.setItem("tasks", JSON.stringify([..._tasks, { task: _task }]));
  };

  return (
    <form onSubmit={(e) => addTask(e)} className="p-4">
      <input type="text" name="task" id="task" />
      <button type="submit" name="submit" className="p-2 bg-slate-50">
        Add task
      </button>
    </form>
  );
};

export default ToDoList1;
