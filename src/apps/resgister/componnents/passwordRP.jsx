import React from 'react';

function PasswordRP() {
  return (
    <div className="mb-4 shadow-md">
      <input
        type="password"
        id="password"
        name="password"
        className="mt-1 p-2 w-full border rounded-md placeholder-opacity-50"
        placeholder="Repeat password"/>
    </div>
  );
}

export default PasswordRP;