import { db } from "../../firebase/config";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore/lite";
import { useState } from "react";
import { BannerList } from "../../components";

const Dashboard = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categories = collection(db, "categories");
        getDocs(categories)
            .then((response) => {
                setCategories(
                    response.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        };
                    })
                );
            })
            .catch(err => { console.log("something is bad ", err); });  
    }, [])
    
    return (
        <BannerList categories={categories}/>
    );
}

export {Dashboard};