import React, { useState } from 'react';

function Passwordinput({ type, id, password, placeholder, validatePassword }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const passwordValue = event.target.value;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    let error = "";
    if (!uppercaseRegex.test(passwordValue)) {
      error = "Mật khẩu phải chứa ít nhất một chữ cái in hoa.";
    } else if (!numberRegex.test(passwordValue)) {
      error = "Mật khẩu phải chứa ít nhất một số.";
    } else if (passwordValue.length < 8) {
      error = "Mật khẩu phải có ít nhất 8 kí tự.";
    } 
    setErrorMessage(error);
    validatePassword(passwordValue, error);
  };
  
  return (
    <div className="mb-4  relative">
      <input
        type={type}
        id={id}
        name={password}
        className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50 pl-10"
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <svg
        fill="#000000"
        width="25"
        height="25"
        viewBox=" 0 0 35 25"
        className="absolute left-3 top-3 text-gray-400"
      >
        <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 9l-3 6m0-6l3 6m-3.75-3h4.5m-7.5-3l-3 6m0-6l3 6M3 12h4.5m12.75-3l-3 6m0-6l3 6m-3.75-3H21" />
      </svg>
    </div>
  );
}

export default Passwordinput;
