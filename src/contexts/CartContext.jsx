import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const cartList = JSON.parse(localStorage.getItem('cart')) ?? [];
    const [cart, setCart] = useState(cartList);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, qty) => {
        const itemToAdd = {...item, qty};
        setCart([...cart, itemToAdd]);
    }

    const empty = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const values = 
    {
        cart,
        addItem,
        empty,
        deleteItem
    };

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
}