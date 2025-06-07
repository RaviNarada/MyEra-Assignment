import React, { useState } from "react";
import StickerButton from "./components/StickerButton";
import Canvas from "./components/Canvas";
import "./App.css";

const initialStickers = [
  "/stickers/sticker1.png",
  "/stickers/sticker2.png",
  "/stickers/sticker3.png",
];

function App() {
  const [stickers, setStickers] = useState([]);

  const handleAddSticker = (src) => {
    const id = Date.now();
    setStickers([
      ...stickers,
      { id, src, x: 40, y: 40 },
    ]);
  };

  const handleDragEnd = (id, x, y) => {
    setStickers(stickers.map((s) => (s.id === id ? { ...s, x, y } : s)));
  };

  const handleDelete = (id) => {
    setStickers(stickers.filter((s) => s.id !== id));
  };

  return (
    <div className="app">
      <div className="toolbar">
        {initialStickers.map((src, i) => (
          <StickerButton key={i} src={src} onClick={handleAddSticker} />
        ))}
      </div>
      <Canvas
        stickers={stickers}
        onDragEnd={handleDragEnd}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
