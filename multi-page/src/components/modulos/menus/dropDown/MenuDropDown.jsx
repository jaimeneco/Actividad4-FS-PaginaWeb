import { useState } from 'react';
import './menu-drop-down.css';

export const MenuDropDown = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return ( 
        <>
        <nav className="h-menu">
            {/* El JSON.stringify puede servir como un console.log pero en pantalla */}
            <button onClick={handleToggleMenu}>
                Menu 
                {/* { JSON.stringify(isOpen)} */}
                </button>

            {isOpen && ( <ul>
                            {items.map( (item, idx) => (
                                <Item key={idx} {...item} /> 
                            ))}
                        </ul> )}

        </nav>
        </>
     );
}

const Item = ({label, url}) => {
    return (
        <li>
            <a href={url}>{label}</a>
        </li>
    )
}