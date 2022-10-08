import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartReviewItems.css'

const CartReviewItems = ({ product }) => {
    const { name, price, quantity, img, shipping } = product;
    console.log(product);
    return (
        <div className='review-item'>
            <div>
            <img src={img} alt="img"></img>
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: { price}</small></p>
                    <p><small>Price: { shipping}</small></p>
                    <p><small>Quantity: { quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-trash' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartReviewItems;