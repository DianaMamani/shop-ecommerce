import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemDetailContainer = () =>{
    const[itemInfo, setItemInfo] = useState(null);
    const itemId = useParams().id;
    
    useEffect(() => {
        getProductById(itemId)
            .then((response) =>{
                setItemInfo(response);
            })
            .catch((err => console.log(err)));
    },[itemId]);

    return (
        <div>
            {itemInfo && <ItemDetail id={itemInfo.id} img={itemInfo.img} name={itemInfo.name} price={itemInfo.price} description={itemInfo.description}/>}
        </div>
    );
}