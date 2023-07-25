/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DataType } from "../App";
import { Page, dataInfo, info } from "../data";
import Profile from "./Profile";
import Education from "./Education";
import Contact from "./Contact";
import Employment from "./Employment";
import Skills from "./Skills";

type ViewerProps = {
  data: DataType;
};
// type Pages = [
//   {
//     id: number;
//     data: DataInfo;
//   }
// ];
let idNumber = 0;
const pageContent: Page[] = [
  {
    id: idNumber++,
    elements: dataInfo,
  },
];

function Viewer({ data }: ViewerProps) {
  const [pages, setPage] = useState<Page[]>(pageContent);

  function onDragEnd() {
    console.log("drag drog event");
  }
  return (
    <div className="flex flex-col layout">
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <h1>Viewer</h1>
        </div>
        <Droppable droppableId="document" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {pages.map((page, index) => (
                <div
                  key={page.id}
                  className="w-[595px] min-h-[600px] max-h-[842px] shadow-3xl my-5 mr-5 -px-10 -py-10 bg-white page flex"
                >
                  <aside className="flex flex-col items-center gap-1 px-2 py-6 text-white bg-green-700 box basis-2/6">
                    {page.elements.map((inf, index) => (
                      <>
                        {inf.type === "Profile" && (
                          <Profile key={index} data={inf} />
                        )}
                        <Draggable
                          draggableId={inf.type}
                          key={inf.type}
                          index={index}
                        >
                          {(draggable) => (
                            <div
                              {...draggable.draggableProps}
                              {...draggable.dragHandleProps}
                              ref={draggable.innerRef}
                            >
                              {inf.type === "Education" && (
                                <Education key={index} data={inf} />
                              )}
                              {inf.type === "Contact" && (
                                <Contact key={index} data={inf} />
                              )}
                            </div>
                          )}
                        </Draggable>
                      </>
                    ))}
                  </aside>
                  <main className="flex flex-col px-8 py-6 text-black bg-white box basis-4/6">
                    {page.elements.map((inf, index) => (
                      <>
                        <Draggable
                          draggableId={inf.type}
                          key={inf.type}
                          index={index}
                        >
                          {(draggable) => (
                            <div
                              {...draggable.draggableProps}
                              {...draggable.dragHandleProps}
                              ref={draggable.innerRef}
                            >
                              {inf.type === "Employment" && (
                                <Employment key={index} data={inf} />
                              )}
                              {inf.type === "KeySkills" && (
                                <Skills key={index} data={inf} />
                              )}
                            </div>
                          )}
                        </Draggable>
                      </>
                    ))}
                  </main>
                </div>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Viewer;
