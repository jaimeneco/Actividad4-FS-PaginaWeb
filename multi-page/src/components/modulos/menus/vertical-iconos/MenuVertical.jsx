import { useState } from 'react';
import './menu-vertical.css';

export const MenuVertical = ({ categories }) => {
    const [openCategories, setOpenCategories] = useState({});

    const handleToggleMenu = (categoryName) => {
        setOpenCategories((prevState) => ({
            ...prevState,
            [categoryName]: !prevState[categoryName],
        }));
    };

    return (
        <nav className="h-menu">
            {categories.map((category, idx) => (
                <div key={idx} className="menu-section">
                    <button className="btn" onClick={() => handleToggleMenu(category.name)}>
                        <i className={`fa-solid ${category.icon}`}></i> {category.name}
                    </button>
                    {openCategories[category.name] && (
                        <ul>
                            {category.items.map((item, itemIdx) => (
                                <MenuItem key={itemIdx} {...item} />
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    );
};

const MenuItem = ({ label, url }) => {
    return (
        <li>
            <a href={url}>{label}</a>
        </li>
    );
};

