import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'

function ChangeAlert ({show, toggleShow}) {
    if (show) {
        return (
            <div className = 'ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Al parecer cambiaste tus ejercicios
                    en otra pestaña o ventana</p>
                    <p>¿Quieres sincronizarlos ahora?</p>
                    <button
                        className="ChangeAlert-containerbutton"
                        onClick={toggleShow}
                    >
                        Si!
                    </button>
                </div>
            </div>       
        )
        
    } else {
        return null;
    }
    
}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);


export { ChangeAlertWithStorageListener};