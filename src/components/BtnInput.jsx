import React from "react";

function ButtonInput({ type, onClick, placeholder, className }) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`bg-white50 text-black py-2 px-4 rounded-md hover:bg-green600 w-full ${className}`}
      >
        {placeholder}
      </button>
    </div>
  );
}

export default ButtonInput;
