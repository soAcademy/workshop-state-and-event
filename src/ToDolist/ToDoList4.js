import React, {useState, useEffect} from 'react';

const ToDoList4 = ()=>{
  const _tasks = JSON.parse(localStorage.getItem('keyTasks'))??[];
  console.log('_tasks :',_tasks);
  const[finalTasks,setFinalTasks] = useState(_tasks);

  const updateTasks =(newTasks)=>{
    console.log('newTasks',newTasks);
    localStorage.setItem(
      'keyTasks',
    JSON.stringify(newTasks.sort((a,b)=>b.id-a.id))
    );
    setFinalTasks(newTasks);
  };
  const addTask = (e)=>{
    e.preventDefault();
    const _tasks = JSON.parse(localStorage.getItem("keyTasks"))??[];
    console.log(e.target["keyTasks"].value);
    const newTasks =[
      ..._tasks,
      {
        id: new Date().getTime(),
        valueTasks: e.target["keyTasks"].value,
        datetime: new Date(),
        status: "active",
      }
    ]
    
    updateTasks(newTasks);
  };
  const doneTask = (id)=>{
    const targetTask = finalTasks.filter(r=>r.id === id)[0];
    const newTasks = [
      ...finalTasks.filter((r)=>r.id !== id),
      {
        id,
        valueTasks : targetTask.task,
        datetime: targetTask.datetime,
        status: "done",
      } 
    ];

    updateTasks(newTasks);
  };
  const deleteTask = (id)=>{
    const newTasks = finalTasks.filter((r)=>r.id !== id);
    updateTasks(newTasks);
  };
  return (
  <>
    <form onSubmit={(e)=>addTask(e)}>
    <input
      type="text"
      id="keyTasks"
      className="bg-red-300 py-2 mr-4"
    />
      <button 
        type='submit' 
        className='px-4 py-2 bg-teal-300 rounded'>
        Add
      </button>
    </form>
    <div>
      {finalTasks?.map(r=>(
        <div className='bg-yellow-300 mt-2'>
        <h1>{r.valueTasks}</h1>
        <div>Status: {r.status}</div>
        <div>date :{new Date(r.datetime).toLocaleDateString()}</div>
        <div>
          <button 
            className='bg-green-300 px-4'
            onClick={()=>doneTask(r.id)}>
              done
          </button>
          <button
            className='bg-orange-300 px-4'
            onClick={()=>deleteTask(r.id)}>
              delete
            </button>
        </div>
        </div>
        
      ))}
    </div>
  </>);
};
export default ToDoList4;