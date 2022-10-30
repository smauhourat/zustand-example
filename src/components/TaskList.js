import React, { useState } from 'react'
import useTaskStore from '../store/taskStore'

const TaskList = () => {
    //const tasks = 
    const tasks = useTaskStore((state) => state.tasks)
    const removeTask = useTaskStore((state) => state.removeTask)
    const toggleTaskStatus = useTaskStore((state) => state.toggleTaskStatus)
    
  return (
    <div>
      <ul>
        {tasks.map((task, i) => {
            return (
                <React.Fragment key={i}>
                    <li>
                        <input type="checkbox" checked={task.completed} onChange={(e) => toggleTaskStatus(task.id)}/>
                        <span>{task?.title}</span>
                        <button onClick={() => removeTask(task.id)}>delete</button>
                    </li>
                </React.Fragment>
            )
        })}
      </ul>
    </div>
  )
}

export default TaskList
