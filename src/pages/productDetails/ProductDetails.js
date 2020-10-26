import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Loading from "../../components/loading/Loading";
import productMethods from "../../database/products";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Loader from "../../components/loading/Loader";

function ProductDetails() {
  const { key } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const getProductDetail = () => {
    productMethods.getProduct(key).on(
      "value",
      (snapshot) => {
        let data = snapshot.val();
        setProductDetail({
          id: data.id,
          title: data.title,
          price: data.price,
          rating: data.rating,
          brand: data.brand,
          image: data.image,
          details: data.details.slice(0, 4),
        });
      },
      (err) => {
        console.log(err.getMessage());
      }
    );
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  let productDetailsToDisplay;
  if (productDetail === null) {
    productDetailsToDisplay = "";
  } else if (productDetail === 0) {
    productDetailsToDisplay = <h1>No Product details found</h1>;
  } else {
    productDetailsToDisplay = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      rating: productDetail.rating,
      brand: productDetail.brand,
      image: productDetail.image,
      details: productDetail.details,
    };
  }

  return (
    <div className="productDetail">
      <div className="productDetail__top">
        <div className="productDetail__imageSection">
          <ImageSlider slides={productDetailsToDisplay.image} />
        </div>
        <div className="productDetail__info">
          <h3 className="productDetail__info__title">
            {productDetailsToDisplay.title}
          </h3>
          <p className="productDetail__info__brand">
            Brand: {productDetailsToDisplay.brand}
          </p>
          <p className="productDetail__info__div__price">
            <small>₹</small>
            <strong className="productDetail__info__price">
              {productDetailsToDisplay.price}
            </strong>
          </p>
          <p className="productDetail__info__rating">
            {productDetailsToDisplay.rating}
            <span className="productDetail__info__ratingIcon">★</span>
          </p>
          <div>
            <button className="productDetail__buyButton"> Buy Now </button>
            <button className="productDetail__cartButton"> Add to Cart </button>
          </div>
          <div className="productDetail__info__bullets">
            {productDetailsToDisplay.details?.map((detail, index) => (
              <ul key={index}>
                <li>{detail}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
