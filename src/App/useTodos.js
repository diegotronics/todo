import React from "react";

import { useLocalStorage } from "./useLocalStorage";



function useTodos() {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);
  
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    let searchedTodos = [];

    if (!searchValue.length >= 1){
        searchedTodos = todos;
    }
    else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodo = {
            text,
            completed: false,
        };
        saveTodos([...todos, newTodo]);
    }
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        saveTodos(newTodos);
    }

    return (
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }
    )
}

export { useTodos };