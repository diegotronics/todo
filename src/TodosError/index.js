import React from "react";

function TodosError({ error }) {
    return (
        <div className="todos-error">
            <h1>{error.message}</h1>
        </div>
    );
}

export { TodosError };