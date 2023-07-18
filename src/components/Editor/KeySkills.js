import { BuilderContext } from "../Builder";
import { useContext, useState } from "react";
import TextArea from "./TextArea";
import ToggleButton from "./ToggleButton";
const KeySkills = () => {
  const ctx = useContext(BuilderContext);

  const [skills, setSkills] = useState(ctx.getComponentData("KeySkills"));
  const handleChange = (e) => {
    setSkills({ ...skills, text: e.target.value });
  };

  return (
    <>
      <TextArea
        placeholder="Key Skills"
        style="px-5 py-3"
        defaultValue={skills.text}
        handleChange={handleChange}
      />
      <ToggleButton
        style="px-5 pb-2"
        defaultValue={skills.display}
        handleChange={(name, prop, isEnabled) => {
          ctx.updateInfo({ ...skills, display: isEnabled });
        }}
      />
      <button
        className="px-6 py-1 mx-5 text-gray-600 bg-gray-200 border-gray-300 rounded-lg shadow hover:bg-gray-300"
        onClick={() => ctx.updateInfo(skills)}
      >
        Save
      </button>
    </>
  );
};

export default KeySkills;
