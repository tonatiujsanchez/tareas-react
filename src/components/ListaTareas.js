import { useEffect, useState } from "react";
import Tarea from "./Tarea"

const ListaTareas = ({ tareas, setTareas, activarFiltro, }) => {

  
  const [ tareasSinCompletar, setTareasSinCompletar ] = useState([]);

  useEffect(()=>{
    const tareaIncompletas = tareas.filter( tareaState => !tareaState.completada );
    setTareasSinCompletar( tareaIncompletas )
  },[activarFiltro, tareas])


  const editarTarea = ( nuevaTarea ) => {
    
    const nuevasTareas = tareas.map( tareaState => tareaState.id === nuevaTarea.id ? nuevaTarea : tareaState );
    setTareas( nuevasTareas );
    
  }

  const eliminarTarea = ( tareaEliminar ) => {

    const result = window.confirm(`¿Desdeas eliminar la tarea: "${ tareaEliminar.texto }"`)

    if( result ){
      const tareasFiltradas = tareas.filter( tareaState => tareaState.id != tareaEliminar.id );
      setTareas( tareasFiltradas )
    }
  }

  return (

    <div>
        <ul className="lista-tareas">

          {
            ( activarFiltro )
              ?(
                ( tareasSinCompletar.length )
                ? tareasSinCompletar.map( ( tarea ) => ( 
                  <Tarea 
                    key={ tarea.id} 
                    tarea={ tarea } 
                    editarTarea={ editarTarea }
                    eliminarTarea={ eliminarTarea } /> 
                  ))
                : <div className="lista-tareas__mensaje"> ~ No hay tareas sin completar ~</div>
              ):(
              ( tareas.length )
              ? tareas.map( ( tarea ) => ( 
                <Tarea 
                  key={ tarea.id} 
                  tarea={ tarea } 
                  editarTarea={ editarTarea }
                  eliminarTarea={ eliminarTarea } /> 
                ))
              : <div className="lista-tareas__mensaje"> ~ No hay tareas agregadas ~</div>
            )

          }
        </ul>
    </div>
  )
}

export default ListaTareas