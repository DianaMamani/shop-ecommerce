import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";

export const ItemDetailContainer = () =>{
    const[itemInfo, setItemInfo] = useState(null);
    const itemId = useParams().id;
    const[existItem, setExistItem] = useState(true);

    useEffect(() => {
        const item = doc(db, "products", itemId)

        getDoc(item)
            .then(doc => {
                if(doc.data() === undefined){
                    setExistItem(false);
                }
                setItemInfo({ ...doc.data(), id: doc.id })
            })
            .catch((err => console.log(err)))
    },[itemId]);

    return (
        <div>
            {existItem ?
                <>
                {itemInfo && <ItemDetail id={itemInfo.id} img={itemInfo.img} name={itemInfo.name} price={itemInfo.price} description={itemInfo.description} />}</>
                :
                <h1>No existe un producto con ese id {itemId}</h1>}
        </div>
    );
}