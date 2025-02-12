import './menuHorizontal.css';

export const MenuHorizontal = ({items}) => {

    console.log(items)

    const miBucle = ({label, url}, idx) => 
        (
            <li key={idx}>{label} {url}</li>
        )
    

    return ( 
        <>
            <nav className="h-menu">
                <ul>
                    {items.map( ({label, url}, idx) => (
                        <li key={idx}>
                            <a href={url}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
     );
}