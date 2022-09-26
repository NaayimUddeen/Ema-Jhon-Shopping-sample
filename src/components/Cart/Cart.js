import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <h3>order cart summery</h3>
            <p>Selected item : {cart.length}</p>
        </div>
    );
};

export default Cart;