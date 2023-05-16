import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const categoryId = useParams().id;

    useEffect(() => {
        getProducts()
            .then(response => {
                if(categoryId) setProducts(response.filter((x) => x.category === categoryId));
                else setProducts(response);
            })
            .catch(err => { console.log("something is bad ", err); })
    }, [categoryId])

    return (
        <div>
            <h1> {greeting || categoryId}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;