import React from "react";

function Buttoncontinue({ type }) {
    return (
        <div className="flex justify-between">
            <button type={type}
                className="bg-white50 text-black py-2 px-4 rounded-md hover:bg-green600 w-full">
                Continue
            </button>
        </div>
    );
}

export default Buttoncontinue;