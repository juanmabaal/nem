import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos,
  totalTodos, loading}) {

    return (    
      <p className={`TodoCounter ${!!loading && "TodoCounter--loading "}`}>
        Has completado   <span>{completedTodos} </span>de<span> {totalTodos} </span>ejercicios
      </p>  
     
    );
  }
  
  export { TodoCounter };