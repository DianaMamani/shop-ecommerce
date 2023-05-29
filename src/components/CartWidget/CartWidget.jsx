import { Link } from 'react-router-dom';
import bag from '../../assets/bag.svg';
import "./cartWidget.css"
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const CartWidget = () => {
    const { calcItemsQty } = useContext(CartContext);

    return (
        <Link to='/cart'>
            <div className='cart-icon'>
                <img src={bag} width="24px" height="24px" alt="img"></img>
                <span className='item-count'>{calcItemsQty()}</span>
            </div>
        </Link>
    )
}