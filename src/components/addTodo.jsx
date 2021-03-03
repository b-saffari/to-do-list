import React, { useState } from 'react';

const AddTodo = ({addTopHandler, addBottomHandler}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const handleInputChange = (event) => {
        setTodoTitle(event.target.value);
    };

    const addTop = () => {
            const task = {
                title: todoTitle,
                isCompleted: false
            }
            addTopHandler(task)
            setTodoTitle("")
    }

    const addBottom = () => {
            const task = {
                title: todoTitle,
                isCompleted: false
            }
            addBottomHandler(task)
            setTodoTitle("")
    }


    return (
        <>
        <div>
            <label className="form-label">New Task</label>
            <input type="txt"  value={todoTitle}
                 onChange={handleInputChange}
                  className="form-control" id="inputTask"
                   placeholder="Enter your task title here"/>
            <button type="button" className="btn btn-primary" onClick={addTop}>Add to Top</button>
            <button type="button" className="btn btn-secondary" onClick={addBottom}>Add to Bottom</button>
        </div>
        </>
    )
}

export default AddTodo