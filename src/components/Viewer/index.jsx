"use client";
// import { compile } from "handlebars-to-jsx";
// import Handlebars from "handlebars";
import { store, useAppSelector } from "@/store";
import { updateInfo } from "@/store/builder/builderSlice";
import { render } from "./helper";
import { useEffect, useState } from "react";
// import { useEffect, useLayoutEffect, useState } from "react";

function Viewer() {
  // const info = store.getState().builder;
  // const builder = useAppSelector((state) => state.builder);
  const hbsCode =
    "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

  const [data, setData] = useState({
    name: "Alan",
    hometown: "Somewhere, TX",
    kids: [
      { name: "Jimmy", age: "12" },
      { name: "Sally", age: "4" },
    ],
  });
  const [jsx, setJsx] = useState();

  // const template = Handlebars.compile(hbsCode);
  // const hbsCode = '<div>{{#each list}}<span>{{item}}</span>{{/each}}</div>'
  // const jsxCode = compile(hbsCode, { isComponent: false });
  // <div>{list.map((item, i) => <span key={i}>{item.item}</span>)}</div>;
  async function save() {
    const dataSaved = await render(data);
    setJsx(dataSaved);
  }

  return (
    <div>
      <h1>Viewer</h1>
      <input
        placeholder="Nombre"
        name="name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
        defaultValue={data.name}
      />
      {jsx && (
        <div
          dangerouslySetInnerHTML={{
            __html: jsx,
          }}
        />
      )}

      <button
        type="button"
        onClick={async () => {
          await save(save);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Viewer;
