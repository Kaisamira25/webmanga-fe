import React from "react";

function Username({ type, id, Username, placeholder }) {
  return (
    <div className="mb-4  relative">
      <input
        type={type}
        id={id}
        name={Username}
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
        <path fill="#888888" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" />
      </svg>
    </div>
  );
}

export default Username;