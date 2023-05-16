import CartWidget from "../CartWidget/CartWidget";
import {NavItem, NavLink, NavbarNav} from "./styles.jsx"

const itemsList = [
    {
        id: 1,
        name: 'INICIO',
        url: '/'
    },
    {
        id: 2,
        name: 'PRODUCTOS',
        url: '/products'
    },
    {
        id: 3,
        name: 'REMERAS',
        url: 'categories/shirts'
    },
    {
        id: 4,
        name: 'CONTACTO',
        url: '/contacto'
    },
]

const NavBar = () => {
    return (
        <>
            <NavbarNav>
                {itemsList.map((item) =>
                    <NavItem key={item.id}>
                        <NavLink to={item.url}>{item.name}</NavLink>
                    </NavItem>
                )}
            </NavbarNav>
            <CartWidget>2</CartWidget>
        </>
    )
}

export default NavBar;