import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css["gallery-list"]}>
      {/* Набір елементів списку із зображеннями */}

      {images.map((img) => {
        return (
          <li key={img.id} className={css["gallery-item"]}>
            <ImageCard data={img} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
