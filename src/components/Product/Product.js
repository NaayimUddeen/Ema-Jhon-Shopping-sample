import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, handleAddToCartClick }) => {
    // const { product, handleAddToCartClick } = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="img"></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} Starts</small>
        </p>
      </div>
      <div>
        <button
          onClick={() => handleAddToCartClick(product)}
          className="btn-cart"
        >
          <p className="btn-text">Add to Card</p>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
