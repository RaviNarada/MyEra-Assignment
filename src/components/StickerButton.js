import React from "react";

const StickerButton = ({ src, onClick }) => (
  <button onClick={() => onClick(src)} className="sticker-button">
    <img src={src} alt="sticker" width="40" height="40" />
  </button>
);

export default StickerButton;
