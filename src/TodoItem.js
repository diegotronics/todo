import React from "react";

function TodoItem(props) {
    return (
        <li>
            <span>{props.todo.text}</span>
        </li>
    );
}

export { TodoItem };