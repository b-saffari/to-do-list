import React from 'react'

const Todo = ({todo, deleteHandler}) => {
    return (
        <div>
            <h1 className={todo.isCompleted ? 'completedTask' : 'unCompletedTask'}>{todo.title}</h1>
            <button type="button" className="btn btn-success" onClick={()=>deleteHandler(todo.title)}>Completed</button>
        </div>
    )
}

export default Todo