function Button({ handleOnClick }: any) {
  return (
    <button
      className="absolute right-6 bottom-6 py-2 rounded-md text-white w-[130px] bg-light-blue-900 z-50"
      onClick={handleOnClick}
    >
      Get Pdf
    </button>
  );
}

export default Button;
