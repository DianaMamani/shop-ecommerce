import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const itemsList = [
    {
        name: 'Inicio',
        url: '/'
    },
    {
        name: 'Productos',
        url: '/products'
    },
    {
        name: 'SALE',
        url: '/on-sale'
    },
    {
        name: 'Contacto',
        url: '/contacto'
    },            
]

const NavBar = () => {
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">e-boutique</a>
            <div className="navigation-menu">
                <ul>
                    {itemsList.map((item) =>
                        <li>
                            <a href={item.url}>{item.name}</a>
                        </li>)
                    }
                </ul>
            </div>
            <CartWidget />
        </nav>        
    )
}

export default NavBar;