import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";

export const ItemDetailContainer = () =>{
    const[itemInfo, setItemInfo] = useState(null);
    const itemId = useParams().id;
    
    useEffect(() => {
        const item = doc(db, "products", itemId)

        getDoc(item)
            .then(doc => {
                setItemInfo({ ...doc.data(), id: doc.id })
            })
            .catch((err => console.log(err)))
    },[itemId]);

    return (
        <div>
            {itemInfo && <ItemDetail id={itemInfo.id} img={itemInfo.img} name={itemInfo.name} price={itemInfo.price} description={itemInfo.description}/>}
        </div>
    );
}