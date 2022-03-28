import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onCancel = () => {
        setNewTodoValue('')
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue === '') {
            return;
        }
        addTodo(newTodoValue);
        setOpenModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Crea una tarea</label>
            <textarea
                onChange={onChange}
                value={newTodoValue}
                placeholder="Cortar el cesped"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};