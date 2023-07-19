/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { store, useAppSelector } from "@/store";
import { updateInfo } from "@/store/builder/builderSlice";
import { render } from "./helper";
import { useEffect, useLayoutEffect, useState } from "react";
import useDebounce from "../../utils/debounce";
import { dataInfo, hbsCode } from "@/utils/data";
import parse from "html-react-parser";
import { Input } from "@material-tailwind/react";
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
    HTMLInputElement
    
  ) => {
   // const name: keyof Profile  = event.name as string
    const ariaRoleDescription = event.ariaRoleDescription
    const value = event.value
    setData((prevData) => {
      const newData = {...prevData}
      // if(ariaRoleDescription == 'Profile'){
      // newData = value
      // return newData
      console.log('name:', name)
      console.log('ariaRole:', ariaRoleDescription)
      console.log('value', value)
      
      newData.Profile.name = value
     
     return newData
    }
    )
  };

  return (
    <div className="w-screen h-screen flex gap-2 ">
      <div className="w-6/12 justify-center  gap-3 flex gap flex-column my-10 mx-10 ">
        <div className="w-1/2 flex flex-col gap-10">
        <Input
          variant="standard" 
          className="max-w-[200px]"
          name="name"
          shrink={true}

          label="Nombre"
          aria-roledescription="Profile"
          onChange={(e) => updateData(e.target)}
          defaultValue={data.Profile.name}
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
        <div className="w-1/2 flex flex-col gap-10">
         <Input         
          variant="standard" 
          name="name"
          className="max-w-[200px]"

          label="Nombre"
          
          aria-roledescription="Profile"
          onChange={(e) => updateData(e.target)}
          defaultValue={data.Profile.name}
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
