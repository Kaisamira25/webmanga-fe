import React from "react";

function Buttonlg({ type }) {
    return (
        <div className="flex justify-between">
            <button type={type}
                onClick={onClick}
                className="bg-white50 text-black py-2 px-4 rounded-md hover:bg-green600 w-full">
                ...
            </button>
        </div>
    );
}

export default Buttonlg;