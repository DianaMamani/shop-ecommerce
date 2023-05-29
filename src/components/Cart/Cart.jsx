import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { CartContainer, TotalPrice, CartTitle, CartItem, ItemImage, ItemInfo, ItemName, ItemPrice, QuantityInput } from './styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const{total, cart, deleteItem, updateQty} = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQty(itemId, newQuantity);
  };

  const handleDeleteItem = (itemId) => {
    deleteItem(itemId);
  };

    return (
        <CartContainer>{
            cart.length === 0 ?
                <CartTitle>Tu carrito esta vacío</CartTitle>
                :
                <>
                    <CartTitle>Tu Carrito</CartTitle>
                    {cart.map((item) => (
                        <CartItem key={item.id}>
                            <ItemImage src={item.img} alt={item.name} />
                            <ItemInfo>
                                <ItemName>{item.name}</ItemName>
                                <ItemPrice>${item.price}</ItemPrice>
                            </ItemInfo>
                            <QuantityInput
                                type="number"
                                value={item.qty}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            />
                            <TiDeleteOutline onClick={() => handleDeleteItem(item.id)} />
                        </CartItem>
                    ))}
                    <TotalPrice>Total: ${total()}</TotalPrice>
                </>
        }</CartContainer>
    );
};

export { Cart};

