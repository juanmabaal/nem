import React from 'react';
import { AppUI } from './AppUI';
import './app.css'
import { useLocalStorage } from './useLocalStorage';

/* const defaultTodos = [
  { text: 'Espalda y triceps', completed: true },
  { text: 'Pecho y Biceps', completed: false },
  { text: 'Pierna', completed: true },
  { text: 'Hombro y Trapecio', completed: false },
  { text: 'Abdomen y Antebrazos', completed: false },
];


localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */
/* localStorage.removeItem('TODOS_V1'); */


function App() {

  const[todos, saveTodos] =useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] =React.useState('');

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
  newTodos[todoIndex].completed = true;
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
  <AppUI
  completedTodos={completedTodos}
  totalTodos={    totalTodos}
  searchValue={    searchValue}
  setSearchValue={    setSearchValue}
  searchedTodos={    searchedTodos}
  completedTodo={    completedTodo}
  deleteTodo={    deleteTodo}
  />
);

}

export default App;