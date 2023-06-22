import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
      <div className='TittleAndCounter'>
      <h1 className="TittleNem">N E M</h1>
      <h2 className="TodoCounter">
        Has completado   <span>{completed} </span>de<span> {total} </span>ejercicios
      </h2>  
      </div>
    );
  }
  
  export { TodoCounter };