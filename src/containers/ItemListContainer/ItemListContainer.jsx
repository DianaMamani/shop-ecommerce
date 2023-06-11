import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "../../firebase/config";

export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const categoryId = useParams().id;

    useEffect(() => {
        const products = collection(db, "products");

        const customQuery = categoryId
            ? query(products, where("category", "==", categoryId))
            : products;
        
        getDocs(customQuery)
            .then((response) => {
                setProducts(
                    response.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        };
                    })
                );
            })
            .catch(err => { console.log("something is bad ", err); });  
    }, [categoryId])

    return (
        <div>
            <h1> {greeting || categoryId.toUpperCase()}</h1>
            <ItemList products={products} />
        </div>
    );
}
