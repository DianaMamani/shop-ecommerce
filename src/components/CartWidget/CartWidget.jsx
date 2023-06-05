import { Link } from 'react-router-dom';
import bag from '../../assets/bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartIcon, ItemCount, LayerCart } from './styles';

export const CartWidget = () => {
    const { calcItemsQty } = useContext(CartContext);

    return (
        <Link to='/cart'>
            <LayerCart>
                <CartIcon src={bag} alt='img'/>
                <ItemCount>{calcItemsQty()}</ItemCount>
            </LayerCart>
        </Link>
    )
}