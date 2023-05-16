import { AddCartButton, ProductContainer, ProductImage, ProductPrice, ProductTitle } from "../ItemDetail/styles";

export const ItemDetail = ({img, name, price}) => {
    return (
        <ProductContainer>
            <ProductImage src={img} alt={name} />
            <ProductTitle>{name}</ProductTitle>
            <ProductPrice>${price}</ProductPrice>
            <AddCartButton>Agregar al carrito</AddCartButton>
        </ProductContainer>
    );
}