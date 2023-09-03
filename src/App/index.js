import React, { useState } from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import {TodoCounter} from '../TodoConter'
import {TodoSearch} from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoForm } from '../TodoForm'
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import imagen from '../TODO ES POSIBLE.png'
import './app.css'


function App() {
  const {
    loading,
    error,
    searchedTodos,
    completedTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal
  } = useTodos();
  
      return (
          <main className='app'>  
                <TodoHeader>
                <strong className="TittleNem">N E M</strong>
                <TodoCounter
                completedTodos = {completedTodos}
                totalTodos = {totalTodos}
                />
                <TodoSearch   
                  searchValue = {searchValue}
                  setSearchValue = {setSearchValue}
                />
                  </TodoHeader>             
              
                  <TodoList>
                  {loading && (
                    <>
                    <TodosLoading />                
                  </>
                  )}
                  {error && <TodosError />}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
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
                <CreateTodoButton 
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
                {openModal && (
                  <Modal>
                  <TodoForm
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                  />
                </Modal>
                )}
           
          </main>
          
        );
}

export default App;