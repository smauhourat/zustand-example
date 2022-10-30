import React, { useState } from 'react'
import useTaskStore from '../store/taskStore'
import Button from './Button'

const TaskForm = () => {
    //const tasks = 
    const addTask = useTaskStore((state) => state.addTask)
    const [taskTitle, setTaskTitle ] = useState("")

    const handleSubmitTask = () => {
        if (!taskTitle) { return alert("Plase add task title")}
        addTask({
            id: Math.ceil(Math.random() * 100000),
            title: taskTitle,
        })
        setTaskTitle("")
    }

  return (
    <div>
      <input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} />
      <button onClick={() => {
        handleSubmitTask()
      }}>Add Task</button>
      <Button onClick={() => alert('1')}>Caca</Button>
    </div>
  )
}

export default TaskForm
