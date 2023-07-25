/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Contact from "./Contact";
import Employment from "./Employment";
import Skills from "./Skills";
import { InfoComponent, Page } from "../types";
import Default from "./Default";

type ViewerProps = {
  pages: Page[];
  setPages: (value: React.SetStateAction<Page[]>) => void;
};

const PAGE_HEIGT = 642;

function Viewer({ pages, setPages }: ViewerProps) {
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);

  function createNewPage() {
    const newPageId = pages.length + 1;
    setPages((prevPages) => [...prevPages, { id: newPageId, elements: [] }]);
  }

  useEffect(() => {
    adjustPages();
  }, [pages]);

  const adjustPages = () => {
    const updatedPages = [...pages];
    let flag = false;
    const pageDomRefs = [...pageRefs.current];
    let currentPageIndex1 = 0;
    for (let i = 0; i < updatedPages.length; i++) {
      const pageDom = pageDomRefs[i];
      const currentPage = updatedPages[i];

      if (pageDom) {
        const elementosInternosDerecha = pageDom.children[1].children;
        let currentPageHeight = 0;

        for (const elemento of elementosInternosDerecha) {
          currentPageHeight += elemento.scrollHeight;
        }
        // const currentPageHeight = pageDom.getBoundingClientRect().height;
        // const currentPageHeight1 = pageDom.scrollHeight;
        if (currentPageHeight > PAGE_HEIGT && i + 1 >= updatedPages.length) {
          console.log("si");
          createNewPage();
        }
        while (
          currentPageHeight > PAGE_HEIGT &&
          currentPageIndex1 + 1 < updatedPages.length
        ) {
          currentPageIndex1++;
          console.log("entro");
          const nextPage = updatedPages[i + 1];
          console.log("nextPage", nextPage);
          // // const nextPageDom = pageDomRefs[i + 1];
          console.log("currentPage", currentPage);
          const lastElement = currentPage.elements.pop();
          if (lastElement) {
            console.log("lastElement", lastElement);
            nextPage.elements.unshift(lastElement);
            console.log("nextPage1", nextPage);
            console.log("currentPage1", currentPage);
            flag = true;
          }
        }
        // console.log("currentPageHeight", currentPageHeight);
        // while (currentPageHeight > PAGE_HEIGT ) {
        //   currentPageIndex1--;
        //   console.log("entro");
        //   if (i + 1 < updatedPages.length) {
        //     const nextPage = updatedPages[i + 1];
        //     // Obtener el último elemento de la página anterior y eliminarlo
        //     const lastElement = currentPage.elements.pop();
        //     if (lastElement) {
        //       nextPage.elements.unshift(lastElement);
        //       flag = true;
        //     }
        //   } else {
        //     createNewPage();
        //     const nextPage = updatedPages[i + 1];
        //     // Obtener el último elemento de la página anterior y eliminarlo
        //     const lastElement = currentPage.elements.pop();
        //     if (lastElement) {
        //       nextPage.elements.unshift(lastElement);
        //       flag = true;
        //     }
        //   }
        // }
        // currentPageIndex++
        // currentPageIndex -= 1;
        // const previousPage = updatedPages[currentPageIndex];
        // // Obtener el último elemento de la página anterior y eliminarlo
        // const lastElement = currentPage.elements.pop();
        // if (lastElement) {
        //   previousPage.elements.unshift(lastElement);
        //   flag = true;
        // }
        let currentPageIndex = 0;
        // currentPageHeight1 = pageDom.scrollHeight;
        // while (
        //   currentPageHeight1 <= PAGE_HEIGT &&
        //   currentPageIndex + 1 < updatedPages.length
        // ) {
        //   currentPageIndex++;
        //   const nextPage = updatedPages[i + 1];
        //   const nextPageDom = pageDomRefs[i + 1];
        //   if (nextPageDom) {
        //     const firstElementNextPageDom =
        //       nextPageDom.getElementsByClassName("element")[0];
        //     const firstelemtHeight =
        //       firstElementNextPageDom?.getBoundingClientRect().height;
        //     if (
        //       firstElementNextPageDom &&
        //       firstelemtHeight &&
        //       currentPageHeight1 + firstelemtHeight <= PAGE_HEIGT
        //     ) {
        //       // console.log("firstelemtHeight", firstelemtHeight);
        //       const lastElement = nextPage.elements.shift();

        //       if (lastElement) {
        //         currentPage.elements.push(lastElement);
        //         flag = true;
        //       }
        //     }
        //   }
        // }
        while (
          currentPageHeight <= PAGE_HEIGT &&
          currentPageIndex + 1 < updatedPages.length
        ) {
          currentPageIndex++;
          const nextPage = updatedPages[i + 1];
          const nextPageDom = pageDomRefs[i + 1];
          if (nextPageDom) {
            console.log("entro2");
            const firstElementNextPageDom = nextPageDom.getElementsByClassName(
              "element"
            )[0].firstChild as HTMLElement;
            const firstelemtHeight =
              firstElementNextPageDom?.getBoundingClientRect().height;
            console.log("firstElementNextPageDom", firstElementNextPageDom);
            console.log("firstelemtHeight", firstelemtHeight);
            if (
              firstElementNextPageDom &&
              currentPageHeight + firstelemtHeight <= PAGE_HEIGT
            ) {
              const lastElement = nextPage.elements.shift();

              if (lastElement) {
                currentPage.elements.push(lastElement);
                flag = true;
              }
            }
          }
        }
        //
      }

      // Calcular la altura actual de la página sumando las alturas de los elementos
      // currentPageHeight = currentPage.elements.reduce(
      //   (acc: number, el: ElementType) => acc + el.height,
      //   0
      // );
    }
    // console.log("terminar", updatedPages);
    if (flag) {
      // const updatedPages1 = removeEmptyLastPage(updatedPages);
      setPages(removeEmptyLastPage(updatedPages));
    }
    //   let currentPageIndex = 0;
    // setPages((prevPages) => {
    //   const updatedPages = [...prevPages];
    //   let currentPageIndex = 0;

    //   // Recorrer todas las páginas y reajustar los elementos en caso de ser necesario
    //   for (let i = 0; i < updatedPages.length; i++) {
    //     let currentPageHeight = 0;
    //     const currentPage = updatedPages[i];

    //     // Calcular la altura actual de la página sumando las alturas de los elementos
    //     currentPageHeight = currentPage.elements.reduce(
    //       (acc: number, el: ElementType) => acc + el.height,
    //       0
    //     );

    //     // Mover los elementos a la página anterior si es posible
    //     while (currentPageHeight > PAGE_HEIGT && currentPageIndex > 0) {
    //       currentPageIndex -= 1;
    //       const previousPage = updatedPages[currentPageIndex];

    //       // Obtener el último elemento de la página anterior y eliminarlo
    //       const lastElement = currentPage.elements.pop();
    //       if (lastElement) {
    //         currentPageHeight -= lastElement.height;
    //         previousPage.elements.push(lastElement);
    //       }
    //     }

    //     // while (currentPageHeight > PAGE_HEIGT && i + 1 < updatedPages.length) {
    //     //   const nextPage = updatedPages[i + 1];
    //     //   const lastElement = currentPage.elements.pop();

    //     //   if (lastElement) {
    //     //     nextPage.elements.unshift(lastElement);
    //     //     currentPageHeight -= lastElement.height;
    //     //   }
    //     // }
    //   }

    //   return updatedPages;
    // });
  };

  function removeEmptyLastPage(pages: Page[]) {
    console.log("pagesup", pages);
    const lastPageIndex = pages.length - 1;
    const lastPage = pages[lastPageIndex];

    // Verificar si la última página está vacía (no tiene elementos)
    if (lastPage.elements.length === 0) {
      // Eliminar la última página de la matriz de páginas
      pages.pop();
    }
    console.log("pagesup", pages);
    return pages;
  }

  function renderSwitch(param: string, data: InfoComponent) {
    console.log("first");
    switch (param) {
      case "Employment":
        return <Employment data={data} />;
      case "KeySkills":
        return <Skills data={data} />;
      case "Libre":
        return <Default data={data} />;
      default:
        return null;
    }
  }
  return (
    <div className="flex flex-col layout">
      <div>
        <h1>Viewer</h1>
      </div>
      {pages.map((page, index) => (
        <div
          ref={(el) => (pageRefs.current[index] = el)}
          key={page.id}
          className="w-[595px] min-h-[600px] max-h-[642px] shadow-3xl my-5 mr-5 -px-10 -py-10 bg-white page flex"
        >
          <aside className="flex flex-col items-center gap-1 px-2 py-6 text-white bg-green-700 box basis-2/6">
            {page.elements.map((inf, index) => (
              <div key={index}>
                {inf.type === "Profile" && <Profile data={inf} />}
                {inf.type === "Education" && <Education data={inf} />}
                {inf.type === "Contact" && <Contact data={inf} />}
              </div>
            ))}
          </aside>
          <main className="flex flex-col px-8 py-6 text-black bg-white element basis-4/6 flex-grow-0 flex-shrink-0 min-h-0">
            {page.elements.map((inf, index) => (
              <div key={index}>{renderSwitch(inf.type, inf)}</div>
            ))}
          </main>
        </div>
      ))}
    </div>
  );
}

export default Viewer;
