import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({openModal,setOpenModal}) {
   
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