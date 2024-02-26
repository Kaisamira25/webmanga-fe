import React from "react";

function InputAll({ type, id, name, placeholder, svg }) {
  return (
    <div className="mb-4 relative">
      <input
        type={type}
        id={id}
        name={name}
        className="mt-1 p-2 w-full outline-none border border-gray-300 rounded-full text-center placeholder-opacity-50 pl-8  "
        placeholder={placeholder}
      />
      <div className="absolute left-2 top-4  text-gray-400">{svg}</div>
    </div>
  );
}
export default InputAll;
