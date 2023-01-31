import react, { useState, useEffect } from 'react';

const ToDoList2 = () => {
  const _tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
  console.log(_tasks);
  const [tasks, setTasks] = useState();

  const addTask = (e) => {
  e.preventDefault();
  const _tasks =JSON.parse(localStorage.getItem('tasks')) ?? [];
  console.log(e.target['task'].value);
  const newTasks = [
   ..._tasks,
    {
      task: e.target['task'].value,
    },
  ]
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  setTasks(newTasks);
}

return (
  <>
  <form onSubmit={(e) => addTask(e)}>
    <input 
    type="text"
    id="task"
    className="border-2 border-blue-300 rounded py-2 mr-4"
    />
    <button type='submit' className='px-4 py-2 bg-red-300 rounded'>
      เพิ่ม
    </button>
  </form>
  <div>
    {tasks?.map((r) => (
     <div className="bg-yellow-300 mt-2">{r.task}</div>
    ))}
    
  </div>
  </>
)
}

export default ToDoList2;