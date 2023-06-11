import { useParams } from "react-router-dom";

export const Order = () => {
    const orderId = useParams().id;

    return (
        <>
            <h1>Gracias por la compra!</h1>
            <h2>Tu orden es: {orderId}</h2>
        </>
    );
}