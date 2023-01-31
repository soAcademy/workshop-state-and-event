import { useState } from "react"

const ToDoList1 = () => {
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
      <form onSubmit={addTask}>
        <input type="text" className="m-2 border-2 px-2" placeholder="Enter Task..."></input>
        <button type="submit" className="bg-red-300 rounded p-2">Add</button>
      </form>
      <div className="m-2">
        {tasks?.map(task=>(
          <div>-{task.task}</div>
        ))}
      </div>
    </div>
  )
}

export default ToDoList1;