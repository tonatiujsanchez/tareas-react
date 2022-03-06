import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'

const Header = ({ activarFiltro, setActivarFiltro, tareas }) => {

  useEffect(()=>{
    if( tareas.length <= 0 ){
      setActivarFiltro( false )
      return;
    }
  },[ tareas ]);


  const toggleFiltro = () => {
    if( tareas.length <= 0 ){
      setActivarFiltro( false );
      window.alert('No hay tareas para filtrar');
      return;
    }
    setActivarFiltro( ( value )=> !value )
  }

  return (
    <header className="header">
      <h1 className="header__titulo">Lista de Tareas</h1>
      <button 
        onClick={ toggleFiltro }
        className="header__boton">
        { ( activarFiltro ) ? 'Mostrar completadas' : 'No mostrar completadas' }
        <FontAwesomeIcon 
          icon={ activarFiltro ? faEye : faEyeSlash } 
          className="header__icono-boton" />
      </button>
    </header>
  )
}

export default Header

