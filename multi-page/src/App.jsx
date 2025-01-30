//Import de componentes
import { Header } from './components/Header';
// import { Header2 } from './components/Header';
import { Footer } from './components/Footer';

//Import de Páginas
import Home from './pages/Home';
import TyC from './pages/TyC';
import Contact from './pages/Contact';


function App() {
  

  //Obtener un query param desde la URL "index.html?page=about"
  const params = new URLSearchParams(window.location.search);
  const selector = params.get('page') || "home";
  console.log("query Param es: ", selector)


  // //Tambié podría utilizar el Path luego del "/"
  // const pathValue = window.location.pathname.slice(1) || "home";
  //   console.log(window.location.pathname, " =>", pathValue);


  let page;
  //Si quisiéramos usar Heade o Header 2 hay que cambiar const params o cons pathValue
  switch(selector){
    case 'terminos': page = <TyC />; break;
    case 'contacto': page = <Contact />; break;
    default: page = <Home />;
  }

  return (
    <>
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

