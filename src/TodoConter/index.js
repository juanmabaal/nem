import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
    return (
      
      <p className="TodoCounter">
        Has completado   <span>{completedTodos} </span>de<span> {totalTodos} </span>ejercicios
      </p>  
     
    );
  }
  
  export { TodoCounter };