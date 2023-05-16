import { Item } from "../Item/Item";
import { StyledItemList } from "./styles";

export const ItemList = ({ products }) => {
    return (
        <StyledItemList>
            {products.map(prod => <Item key={prod.id}{...prod} />)}
        </StyledItemList>
    );
}