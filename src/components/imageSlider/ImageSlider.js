import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "../loading/Loader";
import Loading from "../loading/Loading";
import "./ImageSlider.css";

function ImageSlider(props) {
  const images = props.slides;
  let imagesToDisplay;
  if (images == undefined) {
    imagesToDisplay = "";
  } else {
    imagesToDisplay = (
      <div>
        <Carousel showArrows={false} infiniteLoop useKeyboardArrows autoPlay>
          {images.map((url, index) => {
            return (
              <img
                className="productDetail__imageSection__img"
                src={url}
                key={index}
                alt=""
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
  return imagesToDisplay;
}

export default ImageSlider;
