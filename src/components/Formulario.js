import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Formulario = ({ tareas, setTareas }) => {

  const [ tarea, setTarea ] = useState('');
  const [ error, setError ] = useState(false);
  



  const handleSubmit = ( e ) => {
    e.preventDefault();

    if (tarea.trim() === '' ) {
      setError(true);
      return;
    }

    setError(false);

    const nuevaTarea = {
      id: uuidv4(),
      texto: tarea,
      completada: false
    }
    setTareas([ ...tareas, nuevaTarea ]);

    setTarea('');

  }

  return (
    <form onSubmit={ handleSubmit } className="formulario-tareas">
        <input 
            type="text" 
            className={`formulario-tareas__input ${ error ? "input-error" : "" }`}
            placeholder="Agregar una tarea" 
            value={ tarea }
            onChange={ ( e )=> setTarea( e.target.value ) }/>

        <button 
            type="submit"
            className='formulario-tareas__btn' >
            <FontAwesomeIcon 
                icon={ faPlus } 
                className="formulario-tareas__icono-btn" 
            />
        </button>    
    </form>
  )
}

export default Formulario