import { makePDF } from "@/utils/api";

function Button({ handleOnClick }: any) {
  return (
    <button
      className="px-4 py-2 text-white bg-light-blue-900"
      onClick={handleOnClick}
    >
      Get Pdf
    </button>
  );
}

export default Button;
