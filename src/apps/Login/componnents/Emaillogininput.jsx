import React from "react";

function EmailIP({ type, id, name, placeholder }) {
    return (
        <div className="mb-4 relative">
            <input
                type={type}
                id={id}
                name={name}
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

                <path fill="#888888" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />


            </svg>
        </div>

    );
}

export default EmailIP;