
import React, { useState } from "react";
import Canvas from "./components/Canvas";
import StickerButton from "./components/StickerButton";
import "./App.css";

const App = () => {
  const [stickers, setStickers] = useState([]);

  const handleAddSticker = (src) => {
    const newSticker = {
      id: Date.now(), // Unique ID
      src,
      x: 0,
      y: 0
    };
    setStickers((prev) => [...prev, newSticker]);
  };

  const handleDragEnd = (id, x, y) => {
    setStickers((prev) =>
      prev.map((sticker) =>
        sticker.id === id ? { ...sticker, x, y } : sticker
      )
    );
  };

  const handleDelete = (id) => {
    setStickers((prev) => prev.filter((sticker) => sticker.id !== id));
  };

  return (
    <div className="app">
      <h1>🎨 MyEra Sticker Canvas</h1>
      <div className="sticker-palette">
        <StickerButton src="/stickers/sticker1.png" onClick={handleAddSticker} />
        <StickerButton src="/stickers/sticker2.png" onClick={handleAddSticker} />
        <StickerButton src="/stickers/sticker3.png" onClick={handleAddSticker} />
      </div>
      <main>
        <Canvas
          stickers={stickers}
          onDragEnd={handleDragEnd}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
