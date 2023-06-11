import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";
import { useState } from "react";
import { Brief } from "../../components";

export const Order = () => {
    const[cart, setCart] = useState([]);
    const orderId = useParams().id;

    useEffect(() => {
        const orderDoc = doc(db, "orders", orderId)

        getDoc(orderDoc)
            .then(doc => {
                setCart(
                    doc.data().cart.map((x) => {
                        return {
                            ...x,
                            id: x.id
                        }
                    }))
            })
            .catch((err => console.log(err)))
    }, [orderId]);

    return (
        <>
            <h1>Gracias por la compra!</h1>
            <h2>Tu orden es: {orderId}</h2>
            <Brief items={cart}/>
        </>
    );
}