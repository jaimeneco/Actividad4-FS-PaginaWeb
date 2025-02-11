//Import de componentes useState:
// import { Contador } from './components/estados/ContadorSimple';
// import { Interruptor } from './components/estados/Interruptor';
// import { ListaDeTareas } from './components/estados/Tareas';
// import { Formulario } from './components/estados/Formulario';
// import { GaleriaImagenes } from './components/estados/Galeria';
// import { Temporizador } from './components/estados/Temporizador'
// import { Calculadora } from './components/estados/Calculadora';
// import { Adivinanza } from './components/estados/Adivinanza';
// import { ContadorTexto } from './components/estados/ContadorTexto';
// import { CarritoDeCompras} from './components/estados/CarritoDeCompras';



//Import de componentes useEffect:
// import { Saludar } from './components/efectos/Saludar';
// import { TiempoDeVida } from './components/efectos/TiempoDeVida';
// import { TraerPost } from './components/efectos/TraerPost';
// import { ContadorClick } from './components/efectos/ContadorClick';
// import { CalcularVentana } from './components/efectos/Ventana';
// import { Montar } from './components/efectos/Montar';

//Import de Modulos:
import { Carrusel } from "./components/modulos/Carrusel"
const imageList = [
    "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+1",
    "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+2",
    "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+3",
    "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+4",
    "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+5"
        ]


//-------------------------------------------------
//--------------INICIO DE LA APP-------------------
//-------------------------------------------------
function App() {


  return (
    <>
<h1>COMPONENT PARTY</h1>

{/* <h3>Ejemplos de useState</h3> */}

  {/* <ContadorSimple /> */}

  {/* <Interruptor /> */}

  {/* <ListaDeTareas />  */}

  {/* <Formulario /> */}

  {/* <GaleriaImagenes /> */}

  {/* <Temporizador /> */}

  {/* <Calculadora /> */}

  {/* <Adivinanza /> */}

  {/* <ContadorTexto /> */}

  {/* <CarritoDeCompras /> */}



  {/* <h3>Ejemplos de useEffect</h3> */}

  {/* <Saludar /> */}

  {/* <TiempoDeVida /> */}

  {/* <TraerPost /> */}

  {/* <ContadorClick /> */}

  {/* <CalcularVentana /> */}

  {/* <Montar /> */}

  < Carrusel imageList={imageList}/>
  < Carrusel imageList={imageList} autoPlay/>
    </>
  )
}

export default App
