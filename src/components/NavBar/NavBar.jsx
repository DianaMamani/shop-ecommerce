import CartWidget from "../CartWidget/CartWidget";
import {NavItem, NavLink, NavbarNav} from "./styles.jsx"

const itemsList = [
    {
        name: 'INICIO',
        url: '/'
    },
    {
        name: 'PRODUCTOS',
        url: '/products'
    },
    {
        name: 'SALE',
        url: '/on-sale'
    },
    {
        name: 'CONTACTO',
        url: '/contacto'
    },            
]

const NavBar = () => {
    return (
        <>
            <NavbarNav>
                {itemsList.map((item) =>
                    <NavItem>
                        <NavLink href={item.url}>{item.name}</NavLink>
                    </NavItem>
                )}
            </NavbarNav>
            <CartWidget>2</CartWidget>
        </>
    )
}

export default NavBar;