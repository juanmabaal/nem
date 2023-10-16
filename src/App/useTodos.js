import React  from "react";
import { useLocalStorage } from "./useLocalStorage";



function useTodos() {
    
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizedTodos,
    loading,
    error,
   } =useLocalStorage('TODOS_V1', []);
 const [searchValue, setSearchValue] =React.useState('');
 const [openModal, setOpenModal] =React.useState('');

 const addTodo = (text) => {
  const newTodos = Array.isArray(todos) ? [...todos]: [];
  newTodos.push({
    text,
    completed:false,
  });
  saveTodos(newTodos);
 }

 const todosArray = Array.isArray(todos) ? todos : [];

 const completedTodos =  todosArray.filter(todo => !!todo.completed).length;

 const totalTodos = todosArray.length;


 let searchedTodos = [];

 if (!searchValue.length >= 1) {
   searchedTodos = todos;
 } else {
   searchedTodos = todosArray.filter(todo => {
     const todoText = todo.text.toLowerCase();
     const searchText = searchValue.toLowerCase();
     return todoText.includes(searchText);
   });
 }


const completedTodo = (text) => {
 const newTodos = [...todos];
 const todoIndex = newTodos.findIndex(
   (todo) => todo.text === text 
 );
 newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
 saveTodos(newTodos);
};
const deleteTodo = (text) => {
 const newTodos = [...todos];
 const todoIndex = newTodos.findIndex(
   (todo) => todo.text === text 
 );
 newTodos.splice(todoIndex, 1);
 saveTodos(newTodos);
};

return {
    
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizedTodos,       
}
}

export { useTodos }