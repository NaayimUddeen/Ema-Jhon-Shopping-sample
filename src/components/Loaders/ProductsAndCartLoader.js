import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    // console.log('savedCart', savedCart);
    const initialCart = [];

    //get products ID
    for (const id in savedCart) {
        // console.log('id', id);
        // console.log(products);

    //ID দিয়ে find করে products কে খুজে বের করা
        const addedProduct = products.find(product => product.id === id);
        // console.log(id ,addedProduct);

    //LocalStorage e Products qtty ID দিয়ে বের করা
        const quantity = savedCart[id];
        addedProduct.quantity = quantity;
        // console.log(id, quantity);
    //Normal তে push করা যায়, state এ কপি করে push করতে হয়।
        initialCart.push(addedProduct);
    }

    return {products: products, initialCart: initialCart};
}