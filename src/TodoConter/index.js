import React from 'react';
import './TodoCounter.css';

function TodoCounter({completedTodos,
  totalTodos,}) {

    return (    
      <p className="TodoCounter">
        Has completado   <span>{completedTodos} </span>de<span> {totalTodos} </span>ejercicios
      </p>  
     
    );
  }
  
  export { TodoCounter };