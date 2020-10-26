import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "../../stateProviders/StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.uid,
        title: props.title,
        price: props.price,
        brand: props.brand,
        rating: props.rating,
        image: props.image,
      },
    });
  };
  return (
    <div className="product card">
      <Link to={"/products/" + props.uid}>
        <p className="product__title">{props.title}</p>
        <p className="product__currency">
          <small>₹</small>
          <strong className="product__price">{props.price}</strong>
        </p>
        <img
          className="product__image"
          src={props.image}
          alt="product__image"
        />
      </Link>
      <div className="produdct__div__brand__rating">
        <p className="product__brand">
          <small>By - </small>
          <strong>{props.brand}</strong>
        </p>
        <p className="product__rating">{props.rating}★</p>
      </div>
      <div className="product__div__button">
        <button href="#" className="product__viewButton">
          View Details
        </button>
        <button className="product__addTocartButton" onClick={handleAddToCart}>
          <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;
