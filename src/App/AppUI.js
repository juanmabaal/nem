import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoConter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos} from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import imagen from '../TODO ES POSIBLE.png'

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deleteTodo,
}) {
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
            {loading && <TodosLoading />}
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
        </>
      );
}

export { AppUI }