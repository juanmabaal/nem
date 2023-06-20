
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoConter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import imagen from './TODO ES POSIBLE.png'
import React from 'react';
import './app.css'

const defaultTodos = [
  { text: 'Espalda y triceps', completed: true },
  { text: 'Pecho y Biceps', completed: false },
  { text: 'Pierna', completed: true },
  { text: 'Hombro y Trapecio', completed: false },
  { text: 'Abdomen y Antebrazos', completed: false },
];

function App() {
  const[todos, setTodos] = React.useState(defaultTodos);
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
    (todo) => todo.text == text 
  );
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
};
const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text 
  );
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
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