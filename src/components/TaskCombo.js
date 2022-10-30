import React from 'react'
import useTaskStore from '../store/taskStore'

const TaskCombo = () => {
    const tasks = useTaskStore((state) => state.tasks)
    
  return (
    <div>
      <ul>
        {tasks.map((task, i) => {
            return (
                <React.Fragment key={i}>
                    <li>
                        <input type="checkbox" checked={task.completed}/>
                        <span>{task?.title}</span>
                    </li>
                </React.Fragment>
            )
        })}
      </ul>
    </div>
  )
}

export default TaskCombo
