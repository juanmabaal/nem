import React from "react";
import  {TodoIcon } from './'

function CompleteIcon({onDelete,completed, onComplete}) {
    return (
        <TodoIcon
        type= "check"
        color={completed ? '#000' : 'red'}
        onClick={onComplete}
        />
    )
}

export {CompleteIcon}