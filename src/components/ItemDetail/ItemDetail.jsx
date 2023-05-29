import { Aside, AddCartButton, ProductContainer, ProductDescription, ProductImage, ProductPrice, ProductTitle } from "../ItemDetail/styles";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export const ItemDetail = ({img, name, price, description, id}) => {
    const [count, setCount] = useState(1);
    const { addItem } = useContext(CartContext);

    const add = () =>{
        addItem({id, name, price, img}, count);
    }

    return (
        <ProductContainer>
            <ProductImage src={img} alt={name} />
            <Aside>
                <ProductTitle>{name}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductPrice>${price}</ProductPrice>
                <ItemCount count={count} setCount={setCount} />
                <AddCartButton onClick={add}>Agregar al carrito</AddCartButton>
            </Aside>
        </ProductContainer>
    );
}