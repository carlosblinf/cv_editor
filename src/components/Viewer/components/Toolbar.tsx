import React, { useState } from "react";
import { ElementType } from "../App2";

type ToolbarProps = {
  addElement: (element: ElementType) => void;
};

const Toolbar: React.FC<ToolbarProps> = ({ addElement }) => {
  const [elementContent, setElementContent] = useState<string>("");
  // Agrega más estados para las opciones de estilo, por ejemplo, color, tamaño de fuente, etc.

  const handleAddElement = () => {
    const newElement: ElementType = {
      id: Math.random(), // Usamos Math.random() solo con fines de demostración, considera un mejor enfoque para generar IDs únicos
      content: elementContent,
      height: 100,
      //   style: {}, // Aquí puedes incluir las opciones de estilo que se aplicarán al elemento
    };
    addElement(newElement);
    setElementContent("");
  };

  return (
    <div className="toolbar">
      <input
        type="text"
        value={elementContent}
        onChange={(e) => setElementContent(e.target.value)}
      />
      <button onClick={handleAddElement}>Agregar Elemento</button>
      {/* Agrega más opciones de formato aquí */}
    </div>
  );
};

export default Toolbar;
