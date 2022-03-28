import React from "react";
import { TodoContext } from "../TodoContext";
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

function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
  <React.Fragment>
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
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
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </div>
  </React.Fragment>
  );
}

export { AppUI };