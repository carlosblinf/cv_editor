"use client";
import { useRef, useState } from "react";
// import { BuilderContextProvider } from "@/utils/BuilderContext";
import Viewer from "../Viewer";
import { Input, Textarea } from "@material-tailwind/react";
import { InfoComponent, Page } from "@/utils/types";
import { info } from "@/utils/data";
import Button from "../Button";
import { renderToString } from "react-dom/server";

function Builder() {
  const documentRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<Page[]>(info);

  // const addElement = (element: ElementType) => {
  //   // Comprobamos si la última página tiene suficiente espacio para el nuevo elemento
  //   const lastPage = pages[pages.length - 1];
  //   // const lastPageHeight = lastPage.elements.reduce(
  //   //   (acc: number, el: ElementType) => acc + el.height,
  //   //   0
  //   // );
  //   const elementHeight = element.height;

  //   if (lastPageHeight + elementHeight <= PAGE_HEIGT) {
  //     // Añadir el elemento a la última página
  //     setPages((prevPages) => {
  //       const updatedPages = prevPages.map((page) => {
  //         if (page.id === lastPage.id) {
  //           return {
  //             ...page,
  //             elements: [...page.elements, element],
  //           };
  //         }
  //         return page;
  //       });
  //       return updatedPages;
  //     });
  //   } else {
  //     // Crear una nueva página y añadir el elemento a ella
  //     const newPageId = pages.length + 1;
  //     setPages((prevPages) => [
  //       ...prevPages,
  //       { id: newPageId, elements: [element] },
  //     ]);
  //   }
  //   // setDocumentHeight(documentRef?.current?.scrollHeight);
  // };

  function updateElementInState(updatedElement: InfoComponent) {
    const updatedPages = pages.map((page) => ({
      ...page,
      elements: page.elements.map((element) =>
        element.type === updatedElement.type
          ? { ...element, ...updatedElement }
          : element
      ),
    }));

    setPages(updatedPages);
  }

  function findElementByTypeInPages(pages: Page[], typeToFind: string) {
    // console.log("second", pages, typeToFind);
    for (const page of pages) {
      const foundElement = page.elements.find(
        (element) => element.type === typeToFind
      );
      // console.log("foundElement", foundElement);
      if (foundElement) {
        return foundElement;
      }
    }
    return null;
  }
  // Ejemplo de cómo actualizar un elemento en el estado
  function updateFieldInElement(
    pages: Page[],
    typeToUpdate: string,
    fieldToUpdate: string,
    newValue: any
  ) {
    const updatedPages = pages.map((page) => ({
      ...page,
      elements: page.elements.map((element) =>
        element.type === typeToUpdate
          ? { ...element, [fieldToUpdate]: newValue }
          : element
      ),
    }));

    return updatedPages;
  }

  function insertElementInPage(
    pages: Page[],
    element: InfoComponent,
    pageNumber?: number,
    positionNumber?: number
  ) {
    if (pageNumber === undefined || positionNumber === undefined) {
      // Si no se proporciona el número de página o posición, insertar el elemento en la última página al final
      const lastPageIndex = pages.length - 1;
      pages[lastPageIndex].elements.push(element);
    } else {
      // Si se proporciona el número de página y posición, buscar la página correspondiente y realizar la inserción
      const targetPage = pages.find((page) => page.id === pageNumber);
      if (targetPage) {
        targetPage.elements.splice(positionNumber, 0, element);
      }
    }

    return pages;
  }
  function inserNewElement(
    type: string,
    field: string,
    value: any,
    position?: string,
    pageNumber?: number,
    positionNumber?: number
  ) {
    const foundElement = findElementByTypeInPages(pages, type);
    if (foundElement) {
      return updateFieldInElement(pages, type, field, value);
    } else {
      const newElement: InfoComponent = {
        header: field === "header" ? value : type,
        type,
        [field]: field !== "header" && value,
        display: false,
        position: "left",
      };
      return insertElementInPage(pages, newElement, pageNumber, positionNumber);
    }
  }

  function getFieldElementInPage(type: string) {
    const elementInPage = findElementByTypeInPages(pages, type);
    if (elementInPage) {
      return elementInPage;
    }
    return null;
  }
  // const debounceQuery = useDebounce(data, 750);

  // useEffect(() => {
  //   // void save(debounceQuery);
  //   // console.log(pages);
  // }, [pages]);

  function updateData(
    event: HTMLInputElement | HTMLTextAreaElement,
    type: string
  ) {
    const name = event.name;
    const value = event.value;

    // if (name === "about") {
    console.log("valuesss", value.length, value);
    // }
    const updatedPages = inserNewElement(type, name, value);
    // const devo = useDebounce(inserNewElement(type, name, value), 750);
    // console.log("devo", devo);
    setPages(updatedPages);
    // console.log(pages);

    // if (updatedPages) {
    //   setPages(updatedPages);
    // }
  }

  // const [pages, setPages] = useState<Array<JSX.Element[]>>([]);

  // useEffect(() => {
  //   function paginateContent() {
  //     if (documentRef.current) {
  //       const containerHeight = 800;
  //       const contentElements = jsx && (parse(jsx) as JSX.Element[]);

  //       if (contentElements) {
  //         // let currentPage: JSX.Element[] = [];
  //         // let currentPageHeight = 0;
  //         // const paginatedContent: JSX.Element[][] = [];

  //         for (const element of contentElements) {
  //           // Convertir el elemento JSX a una cadena de texto
  //           const elementAsString = renderToString(element);

  //           // Crear un div temporal para extraer los nodos hijos
  //           const tempDiv = document.createElement("div");
  //           tempDiv.innerHTML = elementAsString;

  //           // Obtener los nodos hijos del div temporal
  //           const childNodes = Array.from(tempDiv.childNodes) as Node[];
  //           const page = document.querySelector(".page");
  //           console.log("first", page?.scrollHeight);

  //           // Agregar la plantilla al div "document"
  //           if (!page)
  //             childNodes.forEach((node) => {
  //               documentRef.current?.appendChild(node);
  //               const elementHeight = (node as HTMLElement).offsetHeight;
  //               console.log("page height", elementHeight);
  //               const localPage = document.querySelector(".page");
  //               console.log("page1", localPage);
  //               if (localPage) setCurrentPage(localPage);

  //               // if (currentPageHeight + elementHeight > containerHeight) {
  //               //   paginatedContent.push(currentPage);
  //               //   currentPage = [element];
  //               //   currentPageHeight = elementHeight;
  //               // } else {
  //               //   currentPage.push(element);
  //               //   currentPageHeight += elementHeight;
  //               // }
  //             });
  //         }

  //         // if (currentPage.length > 0) {
  //         //   paginatedContent.push(currentPage);
  //         // }

  //         // setPages(paginatedContent);
  //       }
  //     }
  //   }

  //   paginateContent();
  // }, [jsx]);

  async function handleOnClick() {
    const AppToString = renderToString(
      <div className="w-full h-full">
        <Viewer pages={pages} setPages={setPages} />
      </div>
    );
    const data = {
      template: AppToString,
    };
    console.log("AppToString", AppToString);
    fetch("https://api.appcvcrea.codeberrysolutions.com/generator/jsx", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) => {
      console.log("response", response);
      void response.blob().then((blob) => {
        console.log("archivo", blob.size);
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "pdf.pdf";
        alink.click();
        console.log("print");
      });
    });
    console.log("res");
  }
  // function copyNodesWithDepth(
  //   originalNode: HTMLElement | ChildNode,
  //   depth: number
  // ) {
  //   if (depth === 0) {
  //     return null; // Detener la copia si se alcanza la profundidad deseada (0)
  //   }

  //   const clonedNode = originalNode.cloneNode(false); // Clonar el nodo sin copiar los hijos
  //   const childNodes = originalNode.childNodes;

  //   for (let i = 0; i < childNodes.length; i++) {
  //     const childNode = childNodes[i];

  //     if (childNode.nodeType === Node.TEXT_NODE) {
  //       // Si es un nodo de texto, copiar el contenido directamente
  //       const clonedTextNode = document.createTextNode(
  //         childNode.textContent as string
  //       );
  //       clonedNode.appendChild(clonedTextNode);
  //     } else {
  //       // Si es un elemento, realizar llamada recursiva para copiar sus hijos
  //       const clonedChildNode = copyNodesWithDepth(
  //         childNode,
  //         depth > 0 ? depth - 1 : depth
  //       );
  //       if (clonedChildNode) {
  //         clonedNode.appendChild(clonedChildNode);
  //       }
  //     }
  //   }

  //   return clonedNode;
  // }

  // const createNewPage = function () {
  //   console.log("first************************");
  //   // const newPage = document.createElement("div");
  //   if (currentPage) {
  //     const clone = currentPage.cloneNode(true) as HTMLElement;
  //     const newPage = currentPage.cloneNode(false);
  //     const asideCopy = clone.childNodes[1]?.cloneNode(false);
  //     const mainCopy = clone.childNodes[3]?.cloneNode(false);
  //     // console.log("asideCopy", currentPage.childNodes[0] as HTMLElement);
  //     currentPage.childNodes.forEach((node, index) =>
  //       console.log("node", index, node as HTMLElement)
  //     );
  //     console.log(
  //       "asideCopy",
  //       (currentPage.childNodes[1] as HTMLElement)?.scrollHeight,
  //       asideCopy as HTMLElement
  //     );
  //     console.log(
  //       "mainCopy",
  //       (currentPage.childNodes[3] as HTMLElement)?.scrollHeight,
  //       mainCopy as HTMLElement
  //     );
  //     // (currentPage.childNodes[1] as HTMLElement)?.scrollHeight > 842
  //     const box1 = currentPage.childNodes[1] as HTMLElement;
  //     let box1Height = box1.scrollHeight;
  //     const box1Elements = box1.children;
  //     console.log("box1Height", box1Height);

  //     let x = box1Elements.length - 1;
  //     while (x > 0 && box1Height > 842) {
  //       asideCopy.appendChild(box1Elements[x].cloneNode(true));
  //       box1.removeChild(box1Elements[x]);
  //       box1Height = box1.scrollHeight;
  //       x--;
  //       console.log("box1Height:", x, ":", box1Height);
  //     }

  //     const box2 = currentPage.childNodes[3] as HTMLElement;
  //     let box2Height = box2.scrollHeight;
  //     const box2Elements = box2.children;
  //     console.log("box2Height", box2Height);

  //     let i = box2Elements.length - 1;
  //     while (i > 0 && box2Height > 842) {
  //       mainCopy.appendChild(box2Elements[i].cloneNode(true));
  //       box2.removeChild(box2Elements[i]);
  //       box2Height = box2.scrollHeight;
  //       i--;
  //       console.log("box2Height:", i, ":", box2Height);
  //     }
  //     // while (i < box1Elements.length) {
  //     //   asideCopy.appendChild(box1Elements[i].cloneNode(true));
  //     //   if (box1.scrollHeight > 842) {
  //     //     box2.removeChild(box1Elements[i]);
  //     //   } else {
  //     //     i++;
  //     //   }
  //     // }
  //     // if ((currentPage.childNodes[0] as HTMLElement)?.scrollHeight > 842) {
  //     //   asideCopy = asideCopy.cloneNode(false) as HTMLElement;
  //     // }
  //     // if ((currentPage.childNodes[1] as HTMLElement)?.scrollHeight > 842) {
  //     //   const lastChildMain = currentPage.childNodes[1] as HTMLElement;
  //     //   console.log("lastChildMain", lastChildMain);
  //     //   mainCopy = mainCopy.cloneNode(false) as HTMLElement;
  //     // }
  //     newPage.appendChild(asideCopy as HTMLElement);
  //     newPage.appendChild(mainCopy as HTMLElement);
  //     // console.log("aside", aside);
  //     // newPage.className = "page";
  //     setCurrentPage(newPage as HTMLElement);
  //     documentRef.current?.appendChild(newPage);
  //   }
  // };

  // const addNewText = function (pageIndex, text) {
  //   setPages((prevPages) => {
  //     const updatedPages = [...prevPages];
  //     updatedPages[pageIndex].paragraphs.push(text);
  //     return updatedPages;
  //   });
  // };

  // useEffect(() => {
  //   const page = document.querySelector(".page");
  //   if (page && !currentPage) {
  //     setCurrentPage(page);
  //   }
  //   console.log("document size", page?.scrollHeight);
  //   // Ejecutamos checkOverflow() después de cada cambio en el estado pages
  //   console.log(
  //     "currentPage222",
  //     currentPage?.scrollHeight,
  //     currentPage && currentPage?.scrollHeight > 842
  //   );
  //   if (currentPage && currentPage.scrollHeight > 842) {
  //     createNewPage();
  //   }
  // }, [jsx, currentPage]);

  return (
    <div className="flex w-screen h-screen bg-indigo-50">
      <div className="grid w-1/2 grid-cols-2 gap-1 mx-10 my-10 ">
        {/* <Input
          variant="standard"
          className="max-w-[200px]"
          name="about"
          shrink={true}
          aria-label="profile"
          label="Libre"
          maxLength={100}
          onChange={(e) => updateData(e.target, "Libre")}
          defaultValue={getFieldElementInPage("Libre")?.about}
        /> */}
        <Input
          variant="standard"
          className="max-w-[200px]"
          name="name"
          shrink={true}
          aria-label="profile"
          label="Nombre"
          maxLength={30}
          onChange={(e) => updateData(e.target, "Profile")}
          defaultValue={getFieldElementInPage("Profile")?.name}
        />

        <Input
          variant="standard"
          name="profession"
          className="max-w-[200px]"
          label="Titulo"
          maxLength={30}
          onChange={(e) => updateData(e.target, "Profile")}
          defaultValue={getFieldElementInPage("Profile")?.profession}
        />

        <Input
          variant="standard"
          name="profileImageURL"
          className="max-w-[200px]"
          label="Imagen:URL"
          onChange={(e) => updateData(e.target, "Profile")}
          defaultValue={getFieldElementInPage("Profile")?.profileImageURL}
        />

        <Input
          variant="standard"
          name="degree"
          className="max-w-[200px]"
          label="Universidad"
          maxLength={100}
          onChange={(e) => updateData(e.target, "Education")}
          defaultValue={getFieldElementInPage("Education")?.degree}
        />

        <Input
          variant="standard"
          name="date"
          className="max-w-[200px]"
          label="Fecha"
          maxLength={30}
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "Education")}
          defaultValue={getFieldElementInPage("Education")?.date}
        />

        <Input
          variant="standard"
          name="email"
          className="max-w-[200px]"
          label="Correo"
          maxLength={40}
          onChange={(e) => updateData(e.target, "Contact")}
          defaultValue={getFieldElementInPage("Contact")?.email}
        />

        <Input
          variant="standard"
          name="cite"
          className="max-w-[200px]"
          label="Website"
          maxLength={40}
          onChange={(e) => updateData(e.target, "Contact")}
          defaultValue={getFieldElementInPage("Contact")?.cite}
        />

        <Input
          variant="standard"
          name="phone"
          className="max-w-[200px]"
          label="Teléfono"
          maxLength={30}
          onChange={(e) => updateData(e.target, "Contact")}
          defaultValue={getFieldElementInPage("Contact")?.phone}
        />
        <Textarea
          variant="outlined"
          name="about"
          label="Resumen"
          maxLength={1200}
          onChange={(e) => updateData(e.target, "Employment")}
          defaultValue={getFieldElementInPage("Employment")?.about}
        />

        <Textarea
          variant="outlined"
          name="text"
          className=""
          label="Tus habilidades"
          maxLength={1200}
          onChange={(e) => updateData(e.target, "KeySkills")}
          defaultValue={getFieldElementInPage("KeySkills")?.text}
        />
        <Button handleOnClick={handleOnClick} />
      </div>
      <div
        id="document"
        className="w-1/2 overflow-y-scroll min-h-screen document"
        ref={documentRef}
      >
        <Viewer pages={pages} setPages={setPages} />
      </div>
    </div>
  );
}

export default Builder;
