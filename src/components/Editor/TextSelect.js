const TextSelect = ({ style, options, handleChange }) => {
  return (
    <div className={`w-full ${style}`}>
      <select
        onChange={handleChange}
        className="w-full px-3 py-2 text-gray-900 bg-white border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border-indigo-500"
      >
        {options &&
          options.map((value, index) => <option key={index}>{value}</option>)}
      </select>
    </div>
  );
};

export default TextSelect;
