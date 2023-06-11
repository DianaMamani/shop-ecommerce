import { Aside, AddCartButton, ProductContainer, ProductDescription, ProductImage, ProductPrice, ProductTitle } from "../ItemDetail/styles";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({img, name, price, description, id}) => {
    const [count, setCount] = useState(1);
    const { addItem } = useContext(CartContext);
    const [isClicked, setIsClicked] = useState(false);
    
    const add = () =>{
        addItem({id, name, price, img}, count);
        setIsClicked(true);
    }

    return (
        <ProductContainer>
            <ProductImage src={img} alt={name} />
            <Aside>
                <ProductTitle>{name}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductPrice>${price}</ProductPrice>
                {
                    !isClicked ?
                        <>
                            <ItemCount count={count} setCount={setCount} />
                            <AddCartButton onClick={add}>Agregar al carrito</AddCartButton>
                        </> :
                        <>
                            <Link to='/cart'>
                                <AddCartButton>Terminar Compra</AddCartButton>
                            </Link>
                            <Link to='/products'>
                                <AddCartButton>Seguir comprando</AddCartButton>
                            </Link>
                        </>
                }
            </Aside>
        </ProductContainer>
    );
}