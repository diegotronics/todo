import React from 'react';
import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        <TodoIcon 
          type="check"
          color={props.completed ? '#4caf50' : '#fff'}
        />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <TodoIcon 
          type="delete"
        />
      </span>
    </li>
  );
}

export { TodoItem };
