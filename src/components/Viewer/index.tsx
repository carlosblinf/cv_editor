/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
"use client";
import { store, useAppSelector } from "@/store";
import { updateInfo } from "@/store/builder/builderSlice";
import { render } from "./helper";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useDebounce from "../../utils/debounce";
import { dataInfo, hbsCode } from "../../utils/data";
import parse from "html-react-parser";
import { Input, Textarea } from "./tw-mui";
import Button from "../Button";
import { makePDF } from "../../utils/api";

interface profile {
  name: string;
  type: string;
  profession: string;
  profileImageURL: string;
  display: boolean;
  about: string;
}

function Viewer() {
  // const info = store.getState().builder;
  // const builder = useAppSelector((state) => state.builder);

  const [data, setData] = useState(dataInfo);
  const [jsx, setJsx] = useState<string>("");
  const debounceQuery = useDebounce(data, 850);
  const documentRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<Element | null>(null);

  useEffect(() => {
    save(debounceQuery);
  }, [debounceQuery]);

  useEffect(() => {
    const page = document.querySelector(".page");
    if (page && !currentPage) {
      setCurrentPage(page);
    }
    console.log("document size", page?.scrollHeight);
    // Ejecutamos checkOverflow() después de cada cambio en el estado pages
    console.log(
      "currentPage222",
      currentPage?.scrollHeight,
      currentPage && currentPage?.scrollHeight > 842
    );
    if (currentPage && currentPage.scrollHeight > 842) {
      createNewPage();
    }
  }, [jsx, currentPage]);

  const createNewPage = function () {
    console.log("first************************");
    // const newPage = document.createElement("div");
    if (currentPage) {
      const clone = currentPage.cloneNode(true) as HTMLElement;
      const newPage = currentPage.cloneNode(false);
      const asideCopy = clone.childNodes[1]?.cloneNode(false);
      const mainCopy = clone.childNodes[3]?.cloneNode(false);
      // console.log("asideCopy", currentPage.childNodes[0] as HTMLElement);
      currentPage.childNodes.forEach((node, index) =>
        console.log("node", index, node as HTMLElement)
      );
      console.log(
        "asideCopy",
        (currentPage.childNodes[1] as HTMLElement)?.scrollHeight,
        asideCopy as HTMLElement
      );
      console.log(
        "mainCopy",
        (currentPage.childNodes[3] as HTMLElement)?.scrollHeight,
        mainCopy as HTMLElement
      );
      // (currentPage.childNodes[1] as HTMLElement)?.scrollHeight > 842
      const box1 = currentPage.childNodes[1] as HTMLElement;
      let box1Height = box1.scrollHeight;
      const box1Elements = box1.children;
      console.log("box1Height", box1Height);

      let x = box1Elements.length - 1;
      while (x > 0 && box1Height > 842) {
        asideCopy.appendChild(box1Elements[x].cloneNode(true));
        box1.removeChild(box1Elements[x]);
        box1Height = box1.scrollHeight;
        x--;
        console.log("box1Height:", x, ":", box1Height);
      }

      const box2 = currentPage.childNodes[3] as HTMLElement;
      let box2Height = box2.scrollHeight;
      const box2Elements = box2.children;
      console.log("box2Height", box2Height);

      let i = box2Elements.length - 1;
      while (i > 0 && box2Height > 842) {
        mainCopy.appendChild(box2Elements[i].cloneNode(true));
        box2.removeChild(box2Elements[i]);
        box2Height = box2.scrollHeight;
        i--;
        console.log("box2Height:", i, ":", box2Height);
      }
      // while (i < box1Elements.length) {
      //   asideCopy.appendChild(box1Elements[i].cloneNode(true));
      //   if (box1.scrollHeight > 842) {
      //     box2.removeChild(box1Elements[i]);
      //   } else {
      //     i++;
      //   }
      // }
      // if ((currentPage.childNodes[0] as HTMLElement)?.scrollHeight > 842) {
      //   asideCopy = asideCopy.cloneNode(false) as HTMLElement;
      // }
      // if ((currentPage.childNodes[1] as HTMLElement)?.scrollHeight > 842) {
      //   const lastChildMain = currentPage.childNodes[1] as HTMLElement;
      //   console.log("lastChildMain", lastChildMain);
      //   mainCopy = mainCopy.cloneNode(false) as HTMLElement;
      // }
      newPage.appendChild(asideCopy as HTMLElement);
      newPage.appendChild(mainCopy as HTMLElement);
      // console.log("aside", aside);
      // newPage.className = "page";
      setCurrentPage(newPage as HTMLElement);
      documentRef.current?.appendChild(newPage);
    }
  };

  async function save(toSave: unknown) {
    const dataSaved = await render(toSave, hbsCode);
    setJsx(dataSaved);
  }

  const updateData = (
    event: HTMLInputElement | HTMLTextAreaElement,
    type: string
  ) => {
    const name = event.name;
    const value = event.value;
    setData((prevData) => {
      const newData = { ...prevData };

      newData[type][name] = value;

      return newData;
    });
  };

  async function handleOnClick() {
    const res = await makePDF(data);
    console.log(res);
  }

  return (
    <div className="flex w-full h-full bg-indigo-50">
      <div className="grid w-1/2 grid-cols-2 gap-1 mx-10 my-10 ">
        <Input
          variant="standard"
          className="max-w-[200px]"
          name="name"
          shrink={true}
          aria-label="profile"
          label="Nombre"
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "profile")}
          defaultValue={data.profile.name}
        />

        <Input
          variant="standard"
          name="profession"
          className="max-w-[200px]"
          label="Titulo"
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "profile")}
          defaultValue={data.profile.profession}
        />

        <Input
          variant="standard"
          name="profileImageURL"
          className="max-w-[200px]"
          label="Imagen:URL"
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "profile")}
          defaultValue={data.profile.profileImageURL}
        />

        <Input
          variant="standard"
          name="degree"
          className="max-w-[200px]"
          label="Universidad"
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "Education")}
          defaultValue={data.education.degree}
        />

        <Input
          variant="standard"
          name="date"
          className="max-w-[200px]"
          label="Fecha"
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "Education")}
          defaultValue={data.education.date}
        />

        <Input
          variant="standard"
          name="email"
          className="max-w-[200px]"
          label="Correo"
          onChange={(e) => updateData(e.target, "contact")}
          defaultValue={data.contact.email}
        />

        <Input
          variant="standard"
          name="cite"
          className="max-w-[200px]"
          label="Website"
          onChange={(e) => updateData(e.target, "contact")}
          defaultValue={data.contact.cite}
        />

        <Input
          variant="standard"
          name="phone"
          className="max-w-[200px]"
          label="Teléfono"
          onChange={(e) => updateData(e.target, "contact")}
          defaultValue={data.contact.phone}
        />
        <Textarea
          variant="outlined"
          name="about"
          label="Resumen"
          aria-roledescription="profile"
          onChange={(e) => updateData(e.target, "employmentHistory")}
          defaultValue={data.employmentHistory.about}
        />

        <Textarea
          variant="outlined"
          name="text"
          className=""
          label="Tus habilidades"
          onChange={(e) => updateData(e.target, "keySkills")}
          defaultValue={data.keySkills.text}
        />
        <Button handleOnClick={handleOnClick} />
      </div>
      <div
        id="document"
        className="w-1/2 overflow-y-scroll document"
        ref={documentRef}
      >
        {jsx && parse(jsx)}
      </div>
    </div>
  );
}

export default Viewer;
