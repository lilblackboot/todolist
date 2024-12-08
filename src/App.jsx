import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Task from './component/Task'
import Addtask from './component/Addtask'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [editingTask,setEditingTask] = useState(null)
  const [editingIndex,setEditingIndex] = useState(null)

  const handleAddtask = (text) =>{

    if (editingTask !== null){
      const updatedTasks = tasks.map((task,index)=>
      index === editingIndex ? {text}: task
      )
      setTasks(updatedTasks)
      setEditingIndex(null)
      setEditingTask(null)
    }else{
      setTasks([...tasks,{text}])
    console.log("updated tasks:" , tasks)
    }
  }
  const handleEdit = (index)=>{
    setEditingTask(tasks[index].text)
    setEditingIndex(index)
  }

  const handleDelete = (indexToDelete)=>{
    setTasks((Tasks)=>Tasks.filter((_,index)=> index !== indexToDelete))
  }

  console.log(tasks)
  
  
  

  return (
    <>
      <h1 className='font-bold bg-purple-600 py-1 rounded-md'>TO-DO LIST</h1>
    
      <Addtask onAddtask={handleAddtask} editingTask ={editingTask}/>
      
      <div className='bg-purple-100 h-50vh w-full py-1 rounded-md'>
        {tasks.map((task,index) =>(
          <Task key={index} onEdit={()=> handleEdit(index)} text = {task.text} onDelete={()=>handleDelete(index)}/>
        ))}
      </div>
      
    </>
  )
}

export default App
