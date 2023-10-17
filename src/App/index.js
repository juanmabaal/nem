import React, { useState } from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoForm } from '../TodoForm'
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert'
import imagen from '../TODO ES POSIBLE.png'
import './app.css'


function App() {
  const { states, statesUpdaters} = useTodos();

  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states;

  const {
    addTodo,
    completedTodo,
    deleteTodo,
    setOpenModal,
    sincronizedTodos, 
    setSearchValue, 
  } = statesUpdaters;
  
      return (
          <main className='app'>  
                <TodoHeader loading= {loading}>
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
              
                  <TodoList
                    error = {error}
                    loading= {loading}
                    totalTodos={totalTodos}
                    searchedTodos = {searchedTodos}
                    searchText={searchValue}
                    onError = {()=> <TodosError /> }
                    onLoading = {() => <TodosLoading /> }
                    onEmptyTodos = {() => <EmptyTodos/>}
                    onEmptySearchResults = {(searchText) => 
                       <p className='Empty-Search-Results'>No hay resultados para {searchText}</p>}
                 > 
                 { todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completedTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                    )}
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
           <ChangeAlert
              sincronize = {sincronizedTodos}
           />
          </main>
          
        );
}

export default App;