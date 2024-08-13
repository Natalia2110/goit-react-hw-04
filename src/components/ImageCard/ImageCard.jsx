import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ data }) => {
  return (
    <div>
      {/* <p>{data.urls.small}</p> */}
      <img
        src={data.urls.small}
        alt={data.descriptions}
        className={css["gallery-img"]}
      />
    </div>
  );
};

export default ImageCard;
