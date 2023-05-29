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
        const itemIndex = cart.findIndex((i) => i.id === item.id);

        if(itemIndex !== -1){
            const itemsToUpdate = [...cart];
            itemsToUpdate[itemIndex].qty += qty;
            setCart(itemsToUpdate);
        }
        else{
            const itemToAdd = {...item, qty};
            setCart([...cart, itemToAdd]);
        }
    }

    const empty = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }

    const calcItemsQty = () => {
        return cart.reduce((acc, item) => acc + item.qty, 0);
    }

    const total = () => {
        return cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    }

    const updateQty = (id, qty) => {
        const itemIndex = cart.findIndex((i) => i.id === id);

        if(itemIndex !== -1){
            const itemsToUpdate = [...cart];
            itemsToUpdate[itemIndex].qty = qty;
            setCart(itemsToUpdate);
        }
    }

    const values = 
    {
        cart,
        addItem,
        empty,
        deleteItem,
        calcItemsQty,
        total,
        updateQty
    };

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
}