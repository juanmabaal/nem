
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoConter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import imagen from './TODO ES POSIBLE.png'
import React from 'react';
import './app.css'

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
  
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const[todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  };

const completedTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text 
  );
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
};
const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text 
  );
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <img src={imagen} alt="Imagen" className='animada'/>
      <CreateTodoButton />
    </>
  );
}

export default App;