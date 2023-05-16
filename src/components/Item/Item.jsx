import {ItemCard, ItemImage, ItemPrice, ItemTitle} from './styles.jsx';

export const Item = ({id, name, img, price, stock, category}) =>{
    return (
        <ItemCard>
            <ItemImage src={img} alt={name} />
            <ItemTitle>{name}</ItemTitle>
            <ItemPrice>{"$" + price}</ItemPrice>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-sm btn-outline-secondary" style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Ver mas</button>
            </div>

        </ItemCard>
    );
}