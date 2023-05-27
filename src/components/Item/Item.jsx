import {ItemCard, ItemImage, ItemPrice, ItemTitle, MoreInfoButton} from './styles.jsx';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock, category}) =>{
    return (
        <ItemCard>
            <ItemImage src={img} alt={name} />
            <ItemTitle>{name}</ItemTitle>
            <ItemPrice>{"$" + price}</ItemPrice>
            <Link to={`/items/${id}`}>
                <MoreInfoButton>Ver mas</MoreInfoButton>
            </Link>
        </ItemCard>
    );
}

export {Item};