import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Tarea = ({ tarea, editarTarea, eliminarTarea }) => {

    const [ editandoTarea, setEditandoTarea ] = useState(false);
    const [ tareaEditada, setTareaEditada ] = useState(tarea.texto);


    const handleSubmit = ( e ) => {
        e.preventDefault();

        editarTarea({
            id: tarea.id,
            texto: tareaEditada,
            completada: tarea.completada
        })
        setEditandoTarea( false );
    }

    const toggleTarea = () =>{
        
        editarTarea({
            id: tarea.id,
            texto: tareaEditada,
            completada: !tarea.completada
        })
    }


    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon
                onClick={ ()=> toggleTarea() }
                icon={ tarea.completada ? faCheckSquare : faSquare }
                className="lista-tareas__icono lista-tareas__icono-check" />

            <div className='lista-tareas__texto'>
                {
                    (editandoTarea)
                        ? <form
                            onSubmit={ handleSubmit } 
                            className='formulario-editar-tarea'>
                            <input
                                type="text"
                                value={ tareaEditada }
                                onChange = { ( e ) => setTareaEditada( e.target.value ) }
                                className='formulario-editar-tarea__input' />
                            <button 
                                type='submit'
                                className='formulario-editar-tarea__btn' >
                                    Guardar
                            </button>
                          </form>
                        : tarea.texto
                }

                
            </div>

            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon 
                    icon={ faEdit }
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={ () => setEditandoTarea( true ) } />
                <FontAwesomeIcon 
                    icon={ faTrash }
                    className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={ ()=> eliminarTarea( tarea ) } />
            </div>
        </li>
    )
}

export default Tarea