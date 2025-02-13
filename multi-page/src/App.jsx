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
// import { Carrusel } from "./components/modulos/carrusel/Carrusel"
// const imageList = [
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+1",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+2",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+3",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+4",
//     "https://dummyjson.com/image/600x300/008080/ffffff?text=Imagen+5"
//         ]

//---------------------------
//--- Menús de Navegación ---
//---------------------------
// MENÚ HORIZONTAL:
// import { MenuHorizontal } from "./components/modulos/menus/horizontal/MenuHorizontal"
// const menuItems = [
//   {label: "Home", url: "./home"},
//   {label: "Configuración", url: "./config"},
//   {label: "Ayuda", url: "./support"}
// ]

//MENÚ DROPDOWN:
// import { MenuDropDown } from "./components/modulos/menus/dropDown/MenuDropDown"
// const menuItems = [
//   {label: "Home", url: "./home"},
//   {label: "Configuración", url: "./config"},
//   {label: "Ayuda", url: "./support"}
// ]

//MENÚ CATEGORÍAS:
import { MenuVertical } from "./components/modulos/menus/vertical-iconos/MenuVertical"
const menuCategorias = [
  {
    name: "Home",
    icon: "fa-tachometer-alt",
    items: [
      {label: "Dashboard", url: "./dashboard"},
      {label: "Reportes", url: "./reports"},
    ]
  },
  {
    name: "Configuración",
    icon: "fa-cog",
    items: [
      {label: "Perfil", url: "./profile"},
      {label: "Tu cuenta", url: "./account"},
    ]
  },
  {
    name: "Ayuda",
    icon: "fa-question-circle",
    items: [
      {label: "FAQ", url: "./faq"},
      {label: "Soporte", url: "./support"},
    ]
  },
  {
    name: "Usuario",
    icon: "fa-user",
    items: [
      {label: "Datos", url: "./datos"},
      {label: "Sesión", url: "./sesion"},
    ]
  },
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


  <h3>Ejemplos de Modulos</h3>

  {/* < Carrusel imageList={imageList}/>
  < Carrusel imageList={imageList} autoPlay/> */}

  {/* <MenuHorizontal items={menuItems} /> */}

  {/* <MenuDropDown items={menuItems} /> */}

  <MenuVertical categories={menuCategorias} />


    </>
  )
}

export default App
