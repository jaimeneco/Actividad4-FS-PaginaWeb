//Import de componentes
import { Header } from './components/Header';
import { Header2 } from './components/Header2';
import {Contador } from './components/estados/Contador';
import {Interruptor} from './components/estados/Interruptor';
import { ListaDeTareas } from './components/estados/Tareas';
import { Footer } from './components/Footer';
import {GaleriaImagenes} from './components/Galeria'
// import { Formulario } from './components/Formulario-registro'
import {Formulario} from './component/estado/Formulario'

ServiceWorkerRegistration,

//Import de Páginas
import Home from './pages/Home';
import InicioSesion from './pages/InicioSesion';
import TyC from './pages/TyC';
import Perfil from './pages/Perfil';
import LibroUnidad from './pages/LibroUnidad';

// importar hooks:
import { Component, useState} from 'react'


//-------------------------------------------------
//--------------INICIO DE LA APP-------------------
//-------------------------------------------------
function App() {
  const [nombre, setNombre] = useState("Jaime")

  //Obtener un query param desde la URL "index.html?page=about"
  const params = new URLSearchParams(window.location.search);
  const selector = params.get('page') || "home";
  console.log("query Param es: ", selector)


  // //Tambié podría utilizar el Path luego del "/"
  // const pathValue = window.location.pathname.slice(1) || "home";
  //   console.log(window.location.pathname, " =>", pathValue);


  let page;
  //Si quisiéramos usar Header o Header 2 hay que cambiar const params o cons pathValue
  switch(selector){
    case 'Home': 
      page = <Home />; 
      break;
    case 'Perfil': 
      page = <Perfil />; 
      break;
    case 'LibroUnidad': 
      page = <LibroUnidad />; 
      break;
    case 'TyC': 
      page = <TyC />; 
      break;
    case 'InicioSesion': 
      page = <InicioSesion />; 
      break;
    default: page = <Home />;
  }

  return (
    <>

    <h3>Ejemplos de useState</h3>

    <Contador />
    <Contador />

{/* Un interruptor que cambie entre encendido y apagado. También cambie su color */}

    <Interruptor />

<hr />

Creemos una lista de tareas, utilizando un input. El input debe tener el atributo:
<input
  value={nombre}
  onChange={(e)=> {setNombre(e.target.value)}}
  placeholder="Ingresar tarea aquí..."
  />
  mi nombre es: {nombre}
  <h1>{nombre}</h1>


  <ListaDeTareas />

      <Header>Con Query Params</Header>
      {/* <Header2>Con PathName</Header2> */}

      {page}

      <Footer>Footer</Footer>
      {/* {  page == "home" ? <Home /> : <Contacto /> } */}

      {/* {  selector == "home" && <Home /> }
      {  selector == "contacto" && <Home /> }
      {  selector == "about us" && <Home /> }
      
      <Home />
      <Contacto /> */}
    </>
  )
}

export default App

