import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartReviewItems from '../CartReviewItems/CartReviewItems';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <div className='shop-container'>
            {/* <h2>this is orders: { products.length}</h2>
            <h2>this is initialCart: { initialCart.length}</h2>
            <h2>this is initialCart: { cart.length}</h2> */}
            <div className='orders-container'>
                {/* CartReviewItems পেইজ প্রত্যেকটা map করে products কে দেখাতে হবে।  */}
                {
                    cart.map(product => <CartReviewItems
                        key={product.id}
                        product={product}
                    ></CartReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;