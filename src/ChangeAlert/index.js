import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert ({show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p>¿Hubo un cambio?</p>
                <button
                    onClick={toggleShow}
                >
                    Volver a cargar la información
                </button>
            </div>
        )
        
    } else {
        return null;
    }
    
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener};