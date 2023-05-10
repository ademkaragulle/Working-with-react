import React from 'react'
import { PropsType } from '../apptypes'



function TodoItem({ taskItem, deleteTask }: PropsType) {
    return (
        <div className="card">
            <p>{taskItem.taskName}{' '}</p>
            <p>{taskItem.workDay}</p>
            <button onClick={() => deleteTask(taskItem.taskName)}>Delete</button>
        </div >
    )
}

export default TodoItem