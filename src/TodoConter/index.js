import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
    return (
      <div className='TittleAndCounter'>
      <h1 className="TittleNem">N E M</h1>
      <h2 className="TodoCounter">
        Has completado   <span>{completedTodos} </span>de<span> {totalTodos} </span>ejercicios
      </h2>  
      </div>
    );
  }
  
  export { TodoCounter };