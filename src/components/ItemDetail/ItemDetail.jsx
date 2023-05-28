import { useState } from "react";
import { Aside, AddCartButton, ProductContainer, ProductDescription, ProductImage, ProductPrice, ProductTitle } from "../ItemDetail/styles";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({img, name, price, description}) => {
    const [count, setCount] = useState(1);

    return (
        <ProductContainer>
            <ProductImage src={img} alt={name} />
            <Aside>
                <ProductTitle>{name}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductPrice>${price}</ProductPrice>
                <ItemCount count={count} setCount={setCount} />
                <AddCartButton>Agregar al carrito</AddCartButton>
            </Aside>
        </ProductContainer>
    );
}