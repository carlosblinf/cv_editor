const TextArea = ({
  name,
  placeholder,
  style,
  label,
  handleChange,
  defaultValue,
  rows = 8,
  isDisabled = false,
}) => {
  return (
    <div className={`w-full ${style}`}>
      <textarea
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full  border-2 border-gray-300 text-gray-900 shadow-lg px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500 ${
          isDisabled ? "text-gray-600 bg-gray-200" : "bg-white"
        }`}
        disabled={isDisabled}
        rows={rows ? rows : "6"}
        name={name}
        label={label}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
};

export default TextArea;
