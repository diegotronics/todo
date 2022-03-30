import React from 'react';

import { useTodos } from './useTodos';

import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from "../TodoForm";
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

import { TodosError } from '../TodosError';
import { TodosLoading } from "../TodosLoading"; 
import { EmptyTodos } from '../EmptyTodos';

import './App.css';

function App() {
  const {
    error, 
    loading, 
    searchedTodos,
    addTodo,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = useTodos();

  return (
    <React.Fragment>
      <div className="App">
        {/* Header */}
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        
        {/* Content */}
        <TodoList>
          {error && <TodosError error={error} />}
          {loading && <TodosLoading />}
          {(!loading && !error && !searchedTodos.length) && <EmptyTodos/>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
