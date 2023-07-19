// "use client";
// /* eslint-disable react-hooks/rules-of-hooks */
// import { ReactNode, createContext, useContext, useMemo, useState } from "react";
// import useDebounce from "./debounce";
// import { InfoComponent, StateInfo } from "./types";
// // import { info } from "./data";

// type BuilderContext = {
//   getSocials: () => InfoComponent | never[];
//   updateInfo: () => unknown;
//   getComponentData: (type: string) => InfoComponent | never[];
// };
// const BuilderContext = createContext({} as BuilderContext);

// export function useBuilderContext() {
//   return useContext(BuilderContext);
// }

// type BuilderContextProviderProps = {
//   children: ReactNode;
// };

// export function BuilderContextProvider({
//   children,
// }: BuilderContextProviderProps) {
//   const [force, setForce] = useState(0);
//   const [infoState, setInfoState] = useState<StateInfo>();

//   const getComponentData = (type: string) => {
//     const data = infoState.components.filter((item) => item?.type === type);
//     return data ? data[0] : [];
//   };
//   const getSocials = () => {
//     const socials = infoState.components.filter(
//       (item) => item.type === "Socials"
//     );
//     return socials ? socials[0] : [];
//   };
//   const updateInfoPrivate = (item: InfoComponent) => {
//     const targetIndex = infoState.components.findIndex(
//       (elem) => elem?.type === item?.type
//     );
//     infoState.components.splice(targetIndex, 1, item);
//     setForce(force + 1);
//   };
//   const updateInfo = useMemo(
//     () => useDebounce(updateInfoPrivate, 300),
//     [updateInfoPrivate]
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <BuilderContext.Provider
//         value={{
//           getSocials,
//           updateInfo,
//           getComponentData,
//         }}
//       >
//         {children}
//         {/* <Viewer /> */}
//       </BuilderContext.Provider>
//     </div>
//   );
// }
