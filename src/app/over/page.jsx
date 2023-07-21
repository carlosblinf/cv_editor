"use client";
import React, { useState, useEffect, useRef } from "react";

const texto =
  "Recent college graduate with experience in various areas of software engineering, including infrastructure and data analytics. A fast learner who thrives on generating innovative ideas, trouble-shooting and problem-solving, and working with object-oriented programming languages including Python and Java.";
function App() {
  const [pages, setPages] = useState([{ paragraphs: [] }]);
  const currentPageRef = useRef(null);

  const createNewPage = function () {
    let newPage = document.createElement("div");
    newPage.className = "page";
    documentElement.appendChild(newPage);
    currentPage = newPage;
  };

  const addNewText = function (pageIndex, text) {
    setPages((prevPages) => {
      const updatedPages = [...prevPages];
      updatedPages[pageIndex].paragraphs.push(text);
      return updatedPages;
    });
  };

  const checkOverflow = function () {
    const currentPage = currentPageRef.current;
    while (currentPage.scrollHeight > currentPage.clientHeight) {
      createNewPage();
    }
  };

  useEffect(() => {
    // Ejecutamos checkOverflow() después de cada cambio en el estado pages
    checkOverflow();
  }, [pages]);

  return (
    <div className="document">
      <button
        onClick={() => addNewText(pages.length - 1, texto)}
        className="add-button"
      >
        Add New Text
      </button>
      {pages.map((page, pageIndex) => (
        <div
          key={pageIndex}
          id={"page-" + pageIndex}
          className="page"
          ref={pageIndex === pages.length - 1 ? currentPageRef : null}
        >
          {page.paragraphs.map((text, textIndex) => (
            <>
              <p key={textIndex}>{text}</p>
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
