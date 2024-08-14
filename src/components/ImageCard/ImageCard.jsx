import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  return (
    <div>
      {/* <p>{data}</p> */}
      <img
        src={data.urls.small}
        alt={data.descriptions}
        className={css["gallery-img"]}
        onClick={() => onClick(data)}
      />
    </div>
  );
};

export default ImageCard;
