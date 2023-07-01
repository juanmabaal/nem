import React from "react";
import './TodoForm.css'

function TodoForm () {
    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
        }}  
        >
            <label>Escribe un EJERCICIO</label>
            <textarea
                placeholder="Escribe los ejercicios que realizarás"
            />
            <div className="TodoForm-buttonContainer">
                <button type= '' className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button type = 'submit' className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}