/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
"use client";
import { store, useAppSelector } from "@/store";
import { updateInfo } from "@/store/builder/builderSlice";
import { render } from "./helper";
import { useEffect, useLayoutEffect, useState } from "react";
import useDebounce from "../../utils/debounce";
import { dataInfo, hbsCode } from "../../utils/data";
import parse from "html-react-parser";
import { Input, Textarea } from "./tw-mui";
import Button from "../Button";
import { makePDF } from "@/utils/api";

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
  const debounceQuery = useDebounce(data, 350);

  useEffect(() => {
    save(debounceQuery);
  }, [debounceQuery]);

  async function save(toSave: unknown) {
    const dataSaved = await render(toSave, hbsCode);
    setJsx(dataSaved);
  }

  const updateData = (event: HTMLInputElement, type: string) => {
    const name: keyof profile = event.name as string;
    const value = event.value;
    setData((prevData) => {
      const newData = { ...prevData };
      // if(ariaRoleDescription == 'profile'){
      // newData = value
      // return newData
      console.log("name:", name);
      console.log("value", value);
      console.log("type:", type);

      newData[type][name] = value;

      return newData;
    });
  };

  async function handleOnClick() {
    const res = await makePDF(data);
    console.log(res);
  }

  return (
    <div className="flex w-screen h-screen bg-indigo-100">
      <div className="grid w-6/12 grid-cols-2 gap-1 mx-10 my-10 ">
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

      {jsx && parse(jsx)}
    </div>
  );
}

export default Viewer;
