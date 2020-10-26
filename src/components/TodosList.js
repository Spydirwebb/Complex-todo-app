/*TodosList.js
/src/components/
*/

import React from "react";
import TodoItem from "./TodoItem.js";
import CompletedItem from "./CompletedItem.js";

const TodosList = (props) =>  {
    let isTodos=true;
    if(props.type === "completed"){
        isTodos=false;
    }

    return (
        <div className="list-container">
            {isTodos
                ?props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={props.handleChangeProps}
                        deleteTodoProps={props.deleteTodoProps} />
                ))
                : props.todos.map(todo => (
                    <CompletedItem
                        key={todo.id}
                        todo={todo}
                        deleteTodoProps={props.deleteTodoProps} />
                ))
            }
        </div>
    )
}

export default TodosList;
