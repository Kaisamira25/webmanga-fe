
import React, { useState } from "react";
function EmailIP({ type, id, Username, placeholder, validateInputs, }) {
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    let error = "";
    if (!inputValue.includes('@')) {
      error = "Email không hợp lệ.";
    }
    setErrorMessage(error);
    validateInputs(inputValue,error);
  };
  return (
    <div className="mb-4  relative">
      <input
        type={type}
        id={id}
        name={Username}
        className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50 pl-10 "
        placeholder={placeholder}
        onChange={handleInputChange}

      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <svg
        fill="#000000"
        width="30"
        height="30"
        viewBox=" 0 0 35 30"
        className="absolute left-3 top-3 text-gray-400"
      >
        <path fill="#888888" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15q.65 0 1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20h5v2zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15" />

      </svg>
    </div>
  );
}

export default EmailIP;