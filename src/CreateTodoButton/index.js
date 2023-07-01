import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {

  const {
    openModal,
    setOpenModal,
   } = React.useContext(TodoContext)
   
    const handleButtonClick = ()=> {
      setOpenModal(!openModal)
    };

    return (
      <button className="CreateTodoButton" 
      onClick={handleButtonClick}>
        +</button>
    );
  }
  
  export { CreateTodoButton };