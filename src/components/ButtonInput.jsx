import React from "react";

function ButtonInput({ type, onClick, placeholder }) {
  return (
    <div className="flex justify-between">
      <button
        type={type}
        onClick={onClick}
        className="bg-white50  text-black py-2 px-4 rounded-md hover:bg-green600 w-full  "
      >
        {placeholder}
      </button>
    </div>
  );
}

export default ButtonInput;
