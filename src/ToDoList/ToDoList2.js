import { useState } from "react"

const ToDoList2 = () => {
  const addTask = (e) => {
    e.preventDefault()
    const _tasks = JSON.parse(localStorage.getItem('task')) ?? []
    const newTasks = [..._tasks, {task: e.target[0].value}]
    localStorage.setItem('task', JSON.stringify(newTasks))
    setTasks(newTasks)
  }
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('task')))
  return (
    <div>
      <form onSubmit={addTask} className="font-kanit">
        <input required type="text" className="m-2 border-2 px-2 rounded-lg" placeholder="Enter Task..."></input>
        <button type="submit" className="bg-red-400 duration-200 rounded p-2 w-16 font-bold hover:bg-red-500 active:bg-red-400">Add</button>
      </form>
      <div className="m-2">
        {tasks?.map((task, idx)=>(
          <div className="bg-gray-300 font-kanit m-2 p-2 rounded" key={idx}>Task : {task.task}</div>
        ))}
      </div>
    </div>
  )
}

export default ToDoList2;