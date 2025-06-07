import React, { useRef } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";
import "./Canvas.css";

const GRID_SIZE = 40;
const STICKER_SIZE = 50;

const snapToGrid = (val) => Math.round(val / GRID_SIZE) * GRID_SIZE;

const Sticker = ({ sticker, onDragEnd, onDblClick }) => {
  const [image] = useImage(sticker.src);
  return (
    <KonvaImage
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={STICKER_SIZE}
      height={STICKER_SIZE}
      draggable
      onDragEnd={(e) =>
        onDragEnd(
          sticker.id,
          snapToGrid(e.target.x()),
          snapToGrid(e.target.y())
        )
      }
      onDblClick={() => onDblClick(sticker.id)}
    />
  );
};

const Canvas = ({ stickers = [], onDragEnd, onDelete }) => {
  const stageRef = useRef();

  const handleDownload = () => {
    if (!stageRef.current) return;
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = "myera-canvas.png";
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="canvas-container">
      <Stage width={600} height={400} ref={stageRef} className="canvas-stage">
        <Layer>
          {stickers && stickers.length > 0 && stickers.map((sticker) => (
            <Sticker
              key={sticker.id}
              sticker={sticker}
              onDragEnd={onDragEnd}
              onDblClick={onDelete}
            />
          ))}
        </Layer>
      </Stage>
      <button className="download-button" onClick={handleDownload}>
        Download PNG
      </button>
    </div>
  );
};

export default Canvas;
