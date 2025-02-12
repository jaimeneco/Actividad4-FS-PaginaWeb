import { useState } from 'react';
import './menu-vertical.css';

export const MenuVertical = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    
    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return ( 
        <>
        <nav className="h-menu">
                <button onClick={handleToggleMenu}>
                    <i class="fa-solid fa-tachometer-alt"></i> Home
                </button>

                <button onClick={handleToggleMenu}>
                    <i class="fa-solid fa-cog"></i> Configuración
                </button>

                <button onClick={handleToggleMenu}>
                    <i class="fa-solid fa-question-circle"></i> Ayuda
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

const Item = ({name, icon, items, label, url}) => {
    return (
        <li>
            <a href={url}>{label}{label}</a>
        </li>
    )
}