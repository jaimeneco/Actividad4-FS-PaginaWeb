//Para usar este Header, tenemos que leer los Query Params
export const Header = ({children}) => {
    return ( 
      <header>
        {children}
        <ul>
          <li className="Footer-listItem"><a href="./?page=home">Home</a></li>
          <li className="Footer-listItem"><a href="./?page=tyc">Términos y Condiciones</a></li>
          <li className="Footer-listItem"><a href="./?page=contact">Contacto</a></li>
        </ul>
      </header>
     );
  }


// //Para usar este Header, tenemos que leer el pathName
//   export const Header2 = ({children}) => {
//     return ( 
//       <header>
//         {children}
//         <ul>
//           <li><a href="./home">Home</a></li>
//           <li><a href="./nosotros">Nosotros</a></li>
//           <li><a href="./contact">Contacto</a></li>
//         </ul>
//       </header>
//      );
//   }

   
  