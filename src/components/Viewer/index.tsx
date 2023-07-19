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
import { Input } from "./tw-mui"

interface Profile {
  name: string,
  type: string,
  profession: string,
  profileImageURL: string,
  display: boolean,
  about: string,
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

  const updateData = (
    event: 
    HTMLInputElement,
    type: string
    
  ) => {
   const name: keyof Profile  = event.name as string
    const value = event.value
    setData((prevData) => {
      const newData = {...prevData}
      // if(ariaRoleDescription == 'Profile'){
      // newData = value
      // return newData
      console.log('name:', name)
      console.log('value', value)
      console.log('type:', type)
      
      newData[type][name] = value
     
     return newData
    }
    )
  };

  async function handleOnClick() {
    const res = await makePDF(data);
    console.log(res);
  }

  return (
    <div
    className="flex w-screen h-screen gap-2 ">
      <div className="flex justify-center w-6/12 gap-3 px-10 py-10 gap flex-column ">
        <div className="flex flex-col w-1/2 gap-10">
        <Input
          variant="standard" 
          className="max-w-[200px]"
          name="name"
          shrink={true}
          aria-label="Profile"
          label="Nombre"
          aria-roledescription="Profile"
          onChange={(e) => updateData(e.target, 'Profile')}
          defaultValue={data.Profile.name}
        />
         <Input
          variant="standard" 
          name="profileImageURL"
          className="max-w-[200px]"

          label="Imagen:URL"
          aria-roledescription="Profile"
          onChange={(e) => updateData(e.target, 'Profile')}
          defaultValue={data.Profile.profileImageURL}
        />
        </div>
        <div className="flex flex-col w-1/2 gap-10">
         <Input         
          variant="standard" 
          name="profession"
          className="max-w-[200px]"

          label="Titulo"
          
          aria-roledescription="Profile"
          onChange={(e) => updateData(e.target, 'Profile')}
          defaultValue={data.Profile.profession}
        />
         <Input
          variant="standard" 
          name="name"
          className="max-w-[200px]"
          label="Nombre"
          aria-roledescription="Profile"
          onChange={(e) => updateData(e.target)}
          defaultValue={data.Profile.name}
        />
        </div>
      </div>

      {jsx && parse(jsx)}
    </div>
  );
}

export default Viewer;
