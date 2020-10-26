/*TodoContainer.js
src/components/
*/

//modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

//components
import TodosList from "./TodosList.js";
import Header from "./Header.js";
import InputTodo from "./InputTodo.js";


const TodoContainer = (props) => {
    /////state
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    const url_api = "https://jsonplaceholder.typicode.com/todos?_limit=10";

    /*getCurrentDate
    returns date clicked in dd/mm/yy format
    */
    const getCurrentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2,"0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yy = today.getFullYear().toString().substr(-2);

        today = mm+"/"+dd+"/"+yy;
        return today;
    }
    /////methods
    /*handleChange
    params: id of todo
        note: bubbled up from TodoItem.js
    function
        -check if props.id matches a todo.id
        -true - flips todo.completed
    */
    const handleChange = id => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = true;
                    setTimeout(() => { handleCompleted(todo); }, 1000);
                }
                return todo;
            })
        )
    };

    const handleCompleted = todo => {
        const doneTodo = {
            id: todo.id,
            title: todo.title,
            dateCompleted: getCurrentDate(),
        }
        setCompletedTodos([...completedTodos, doneTodo ]);
        delTodo(todo.id);

        return completedTodos;
    };

    /*delTodo
    params: id of todo
        note: bubbled up from TodoItem.js
    function: removes todo object from state based on todo.id
    */
    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    };

    /*delCompleted
    params: id of completed
        note: bubbled up from CompletedItem.js
    function: removes completed object from state based on completed.id
    */
    const delCompleted = id => {
        setCompletedTodos([
            ...completedTodos.filter(completed => {
                return completed.id !== id
            }),
        ])
    };

    /*addTodoItem
    params: title of todo to add
        note: bubbled up from InputTodo.js
    function: adds new todo object to state
    */
    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo]);
    };

    /////effect
    /*useEffect(() => {
        axios
            .get(url_api)
            .then(res => setTodos(res.data))
    },[])
    */

    return (
        <div className="container">
            <Header />
            <InputTodo addTodoProps={addTodoItem}/>
            <TodosList
                type="todo"
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo} />
            <h2 className="completed_header">Completed Todos</h2>
            <h3 className="completed_label-title">Task<span className="completed_label-date">Date Completed</span></h3>
            <TodosList
                type="completed"
                todos={completedTodos}
                handleChangeProps={handleChange}
                deleteTodoProps={delCompleted} />
        </div>
    );
}

export default TodoContainer;
