import React from 'react';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoConter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoForm } from '../TodoForm'
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import imagen from '../TODO ES POSIBLE.png'
import { TodoContext } from '../TodoContext';

function AppUI() {

const {
  loading,
  error,
  searchedTodos,
  completedTodo,
  deleteTodo,
  openModal,
  /* setOpenModal, */
} = React.useContext(TodoContext);

    return (
        <main className='app'>  
          <header>
            <strong className="TittleNem">N E M</strong>
            <TodoCounter/>
          </header>       
            
            <TodoSearch   />
            
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
              <CreateTodoButton />
              {openModal && (
                <Modal>
                <TodoForm/>
              </Modal>
              )}
         
        </main>
        
      );
}

export { AppUI }