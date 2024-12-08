import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Task from './component/Task'
import Addtask from './component/Addtask'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddtask = (text) =>{

    setTasks([...tasks,{text}])
    console.log("updated tasks:" , tasks)
  }

  console.log(tasks)
  
  
  

  return (
    <>
      <h1 className='font-bold bg-purple-600 py-1 rounded-md'>TO-DO LIST</h1>
    
      <Addtask onAddtask={handleAddtask}/>
      
      <div className='bg-purple-100 h-50vh w-full py-1 rounded-md'>
        {tasks.map((task,index) =>(
          <Task key={index} text = {task.text}/>
        ))}
      </div>
      
    </>
  )
}

export default App
