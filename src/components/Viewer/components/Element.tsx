import React from "react";
import { ElementType } from "../App2";

type ElementProps = {
  element: ElementType;
  onDelete: () => void;
};

const Element: React.FC<ElementProps> = ({ element, onDelete }) => {
  return (
    <div className="element" style={{ height: element.height }}>
      {element.content}
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default Element;
