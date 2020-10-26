/*TodoItem.js
/src/components
*/

import React from "react";

const CompletedItem = (props) => {
    const { dateCompleted, id, title } = props.todo;

    return (
    <li className="todoList-item">
        <button onClick={() => props.deleteTodoProps(id)}>
            Delete
        </button>
        <span className="todoList-item-completed">
            {title}</span>
        <span className="todoList-date-completed">
            {dateCompleted}</span>
    </li>
    )
}

export default CompletedItem;
