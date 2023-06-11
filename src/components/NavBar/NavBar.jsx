import { useContext } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import {NavItem, NavLink, NavbarNav} from "./styles.jsx"
import { CartContext } from '../../contexts/CartContext'

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
        id: 4,
        name: 'CONTACTO',
        url: '/contacto'
    },
]

const NavBar = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <NavbarNav>
                {itemsList.map((item) =>
                    <NavItem key={item.id}>
                        <NavLink to={item.url}>{item.name}</NavLink>
                    </NavItem>
                )}
            </NavbarNav>
            {cart.length !== 0 ? <CartWidget /> : <></>}
        </>
    )
}

export {NavBar};