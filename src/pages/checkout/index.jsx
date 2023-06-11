import { useContext } from "react";
import { Brief, CheckoutForm } from "../../components";
import { CartContext } from "../../contexts/CartContext";
import { Container, Separator } from "./styles";

export const Checkout = () => {
    const {cart} = useContext(CartContext);

    return(
        <>
            <h2>Checkout</h2>
            <Container>
                <CheckoutForm />
                <Separator />
                <Brief items={cart} />
            </Container>
        </>
    );
}