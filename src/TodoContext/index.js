import React  from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
   } =useLocalStorage('TODOS_V1', []);
 const [searchValue, setSearchValue] =React.useState('');
 const [openModal, setOpenModal] =React.useState('');

 const addTodo = (text) => {
  const newTodos = [...todos];
  newTodos.push({
    text,
    completed:false,
  });
  saveTodos(newTodos);
 }

 const completedTodos = todos.filter(todo => !!todo.completed).length;
 const totalTodos = todos.length;


 const searchedTodos = todos.filter(
   (todo) => {
     const todoText = todo.text.toLowerCase();
     const searchText = searchValue.toLowerCase();
     return todoText.includes(searchText.toLowerCase());
   }
 );


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

return (
    <TodoContext.Provider value={{
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
    }}>
        {children}
    </TodoContext.Provider>
)

}

export { TodoContext, TodoProvider };