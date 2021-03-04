import React, { useState } from "react";
import AddTodo from "./addTodo";
import Todo from "./todo";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    
    const addTopHandler = (todo) => {
           setTodoList([todo, ...todoList])
    }

    const addBottomHandler = (todo) => {
        const tds = [...todoList ,todo]
        tds.sort(function(x, y) {
            return (x.isCompleted === y.isCompleted)? 0 : x.isCompleted? 1 : -1;
        })

        setTodoList(tds)
    }
    const deleteHandler = (title) => {
        const todos = [...todoList];
        const index = todos.findIndex(todo => todo.title === title)
        todos[index].isCompleted = true

        todos.sort(function(x, y) {
            return (x.isCompleted === y.isCompleted)? 0 : x.isCompleted? 1 : -1;
        })

        setTodoList(todos)
    }
    const undoHandler = (title) => {
        const todos = [...todoList];
        const index = todos.findIndex(todo => todo.title === title)
        todos[index].isCompleted = false
        todos.sort(function(x, y) {
            return (x.isCompleted === y.isCompleted)? 0 : x.isCompleted? 1 : -1;
        })

        setTodoList(todos)
    }
   

    return (
        <>
            <AddTodo addTopHandler={addTopHandler} addBottomHandler={addBottomHandler} />
            <div className="border border-info m-2 p-4">
                <h2>To DO List</h2>
                {todoList.map(t => <Todo key={t.title} todo={t} deleteHandler={deleteHandler} undoHandler={undoHandler}/>)}
            </div>
            
        </>
    )
}

export default TodoList