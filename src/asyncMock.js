import products from './assets/json/products';

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const item = products.find((el) => el.id == id);
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "Not Found"
            })
        }
    })
}
