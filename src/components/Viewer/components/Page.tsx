/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
import Element from "./Element";
import { ElementType } from "../App2";

type PageProps = {
  elements: ElementType[];
  deleteElement: (pageId: number, elementId: number) => void;
  pageId: number;
};

const Page: React.FC<PageProps> = ({ elements, pageId, deleteElement }) => {
  return (
    <div className="page">
      {elements.map((element) => (
        <Element
          key={element.id}
          element={element}
          onDelete={() => deleteElement(pageId, element.id)}
        />
      ))}
    </div>
  );
};

export default Page;
