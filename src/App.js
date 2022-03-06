import { useEffect, useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';

import './App.css';


const App = () => {

  const [ tareas, setTareas ] = useState([]);
  const [ activarFiltro, setActivarFiltro ] = useState(false);

  // key de localStorage
  const keyStorage = 'tareas-0bf6d4bc-f7e7-45f2-b9ab-024993c1c3ef';
  const keyStorageCompletadas = 'tareas-filtro-completadas-0bf6d4bc-f7e7-45f2-b9ab-024993c1c3ef';
  
  // Leer en el localStorage
  useEffect( ()=>{
    const tareasLS = JSON.parse(localStorage.getItem(keyStorage)) ?? [];
    const activarFiltroLS = JSON.parse(localStorage.getItem(keyStorageCompletadas)) ?? false;
    setTareas( tareasLS )
    setActivarFiltro(activarFiltroLS)
  },[]);

  // Guardar en el localStorage
  useEffect(()=>{
    localStorage.setItem(keyStorage, JSON.stringify(tareas) );
  },[tareas])

  useEffect(()=>{
    localStorage.setItem(keyStorageCompletadas, activarFiltro.toString() );
  },[activarFiltro])



  return (
    <div className='contenedor'>
      <Header 
          activarFiltro = { activarFiltro }
          setActivarFiltro = { setActivarFiltro }
          tareas = { tareas } />
      <Formulario
          tareas = { tareas }
          setTareas={ setTareas } />
      <ListaTareas
          tareas = { tareas }
          setTareas = { setTareas }
          activarFiltro = { activarFiltro } />
    </div>
  );
}

export default App;
