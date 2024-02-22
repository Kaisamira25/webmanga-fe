import React from 'react';

function PasswordRS({ type, id, password, placeholder }) {
  return (
    <div className="mb-4  relative">
      <input
        type={type}
        id={id}
        name={password}
        className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50 pl-10"
        placeholder={placeholder}
         />
      <svg
        fill="#000000"
        width="25"
        height="25"
        viewBox=" 0 0 35 25"
        className="absolute left-3 top-3 text-gray-400"
      >
        <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 9l-3 6m0-6l3 6m-3.75-3h4.5m-7.5-3l-3 6m0-6l3 6M3 12h4.5m12.75-3l-3 6m0-6l3 6m-3.75-3H21"/>

       

      </svg>
    </div>
  );
}

export default PasswordRS;