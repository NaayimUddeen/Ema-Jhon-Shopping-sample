import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
// cart, products => useState declare  
const Shop = () => {
  const products = useLoaderData();
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(products);

  //*******Loader used alternate of UseEffect******//
  //get product information data by fetch
  // useEffect(() => {
    // console.log('product Load before fetch');
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data)
  //     })
  // }, []);
          // console.log('products loaded after fetch');
  
          // get Local Storage data call from fakeDb js
  useEffect(() => {
    // console.log('Local Storage First Line');
    const storedCart = getStoredCart();
    // console.log(storedCart);
    //create a new array stored products quantity & Value
    const savedCart = []
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        // console.log(addedProduct)
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
    // console.log('local storage Load finished');
  }, [products]);   /*dependency injection-পুনরায় কল করবে */

  //shopCart Button
  const handleAddToCartClick = (selectedProduct) => {
    // console.log(selectedProduct);
    //quantity এর মান ০ দেওয়া আছে তাই ১ করে সেট করতে হবে।
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    // localStorage call
    addToDb(selectedProduct.id)
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h2>This is products: {products.length}</h2> */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCartClick={handleAddToCartClick}
          ></Product>
        ))}
        {/* order cart summery */}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
