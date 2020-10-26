/*TodoItem.js
/src/components
*/

import React from "react";

const TodoItem = (props) => {
    const { completed, id, title } = props.todo;

    return (
    <li className="todoList-item">
        <input type="checkbox"
            checked={completed}
            onChange={() => props.handleChangeProps(id)}/>
        <button onClick={() => props.deleteTodoProps(id)}>
            Delete
        </button>
        <span className={completed ? "todoList-item-completed" : null}>
            {title}
        </span>
    </li>
    )
}

export default TodoItem;
