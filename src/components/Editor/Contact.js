import TextInput from "./TextInput";
import { useState, useContext } from "react";
import ActionMenu from "./ActionMenu";
import { getData } from "@/utils/dataHooks";
import { useAppDispatch, useAppSelector } from "@/store";

const Contact = () => {
  const newItem = {
    text: "",
  };
  // const ctx = useContext(BuilderContext)
  const builder = useAppSelector((state) => state.builder);
  const dspatch = useAppDispatch();
  const [contact, setContact] = useState(getData(builder, "Contact"));
  // ctx.getComponentData('Contact')

  const handleChange = (i, e) => {
    const modifiedItem = {
      ...contact.items[i],
      text: e.target.value,
    };
    contact.items.splice(i, 1, modifiedItem);
    handleSaveClick();
  };
  const handleAddClick = () => {
    setContact({
      ...contact,
      items: [...contact.items, newItem],
    });
  };
  const handleRemoveClick = () => {
    setContact({
      ...contact,
      items: contact.items.filter(
        (item, index) => index < contact.items.length - 1
      ),
    });
  };
  // const handleSaveClick = () => ctx.updateInfo(contact);
  const handleSaveClick = () => {};

  return (
    <div>
      {contact.items.map((item, index) => (
        <TextInput
          key={index}
          placeholder="Custom field"
          defaultValue={item.text}
          handleChange={(e) => handleChange(index, e)}
        />
      ))}
      <ActionMenu
        handleSaveClick={handleSaveClick}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
  );
};

export default Contact;
