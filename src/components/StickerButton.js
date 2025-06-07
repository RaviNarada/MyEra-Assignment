import React from "react";
import "./StickerButton.css";

const StickerButton = ({ src, onClick }) => (
  <button className="sticker-button" onClick={() => onClick(src)}>
    <img src={src} alt="sticker" width="30" />
  </button>
);

export default StickerButton;
