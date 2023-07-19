import { Add } from "./Icons/Add";
import { Remove } from "./Icons/Remove";
const ActionMenu = ({
  style,
  handleSaveClick,
  handleAddClick,
  handleRemoveClick,
}) => {
  return (
    <div className={`flex py-2 flex-row justify-between ${style}`}>
      {/* <button
        className='px-6 py-1 text-gray-600 bg-gray-200 border-gray-300 rounded-lg shadow hover:bg-gray-300'
        onClick={handleSaveClick}
      >
        Save
      </button> */}
      <div className="flex flex-row pt-[5px]">
        <Add color="#d1d5db" handleClick={handleAddClick} />

        <Remove color="#d1d5db" handleClick={handleRemoveClick} />
      </div>
    </div>
  );
};

export default ActionMenu;
