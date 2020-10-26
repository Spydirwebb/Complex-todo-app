/*InputTodo.js
/src/components/
*/

import React, { useState } from 'react';

const InputTodo = (props) => {
    /////state
    const [inputText, setInputText] = useState({
        title: "",
    });

    //onChange
    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    //handleSubmit
    const handleSubmit = e => {
        e.preventDefault();
        props.addTodoProps(inputText.title);
        setInputText({
            title: "",
        });
    };

    return (   //text input, submit button
        <form onSubmit={handleSubmit} className="input_form-container">
            <input type="text"
                className="input_form-text"
                placeholder="Add Todo..."
                value={inputText.title}
                name="title"
                onChange={onChange}/>
            <input type="submit" className="input_form-submit" value="Submit" />
        </form>
    )
}

export default InputTodo;
