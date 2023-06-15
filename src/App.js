
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
  { text: 'Pierna', completed: false },
  { text: 'Hombro y Trapecio', completed: false },
  { text: 'Abdomen y Antebrazos', completed: false },
];

function App() {

  return (
    <>
      <TodoCounter completed={1} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <img src={imagen} alt="Imagen" className='animada'/>
      <CreateTodoButton />
    </>
  );
}

export default App;