import React from 'react';

function PasswordRP({ type, id, Rppassword, placeholder }) {
  return (
    <div className="mb-4 relative">
      <input
        type={type}
        id={id}
        name={Rppassword}
        className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50 pl-10"
        placeholder={placeholder}
      />
      <svg
        fill="#000000"
        width="30"
        height="30"
        viewBox=" 0 0 35 30"
        className="absolute left-3 top-3 text-gray-400"
      >
        <path fill="#888888" d="M2.078 17.562a.493.493 0 0 1 .131-.476l2-2a.509.509 0 0 1 .707 0c.199.183.185.522 0 .707l-1.147 1.146h15.669a1.5 1.5 0 0 0 1.5-1.5V12a.5.5 0 0 1 1 0v3.439a2.5 2.5 0 0 1-2.5 2.5H3.769l1.147 1.147a.509.509 0 0 1 0 .707c-.183.199-.522.185-.707 0l-2-2a.466.466 0 0 1-.131-.231M21.923 6.457a.499.499 0 0 1-.132.476l-2 2a.509.509 0 0 1-.707 0c-.199-.183-.185-.522 0-.707l1.147-1.147H4.562a1.5 1.5 0 0 0-1.5 1.5v3.439a.5.5 0 0 1-1 0V8.579a2.5 2.5 0 0 1 2.5-2.5h15.669l-1.146-1.146a.509.509 0 0 1 0-.707c.183-.199.522-.185.707 0l2 2c.065.063.11.143.131.231" />
      </svg>
    </div>
  );
}

export default PasswordRP;